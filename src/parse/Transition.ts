type Rule = {
  keyword?: boolean //关键字
  quotation?: boolean //双引号
}

type TSign = {
  value: string
  html: string
}

type TSigns = Readonly<{
  keywordStart: TSign
  keywordEnd: TSign
  quotationStart: TSign
  quotationEnd: TSign
}>

type TEntityChar = Readonly<{
  value: string
  replace: string
}>

type TEntityCharacters = {
  blank: TEntityChar
  greater: TEntityChar
  less: TEntityChar
}

/**
 * @description 处理单行代码文本
 * @param row 单行代码
 * @param rule 代码规则
 * @param keywords 关键字匹配Set
 * @param InitRule 初始化代码规则条件
 * @param Signs 代码标记集合
 * @param EntityCharacters 字符实体集合
 */
export class Transition {
  private row: string
  private rule: Rule
  private keywords: Set<string>
  private static InitRule: Readonly<Rule> = {
    keyword: true,
    quotation: true
  }
  private static Signs: Readonly<TSigns> = {
    keywordStart: {
      value: '$[sign-keyword-start]',
      html: `<span class="sc-hl--keyword">`
    },
    keywordEnd: {
      value: '$[sign-keyword-end]',
      html: `</span>`
    },
    quotationStart: {
      value: '$[sign-quotation-start]',
      html: `<span class="sc-hl--quotation">"`
    },
    quotationEnd: {
      value: '$[sign-quotation-end]',
      html: `"</span>`
    }
  }
  private static EntityCharacters: Readonly<TEntityCharacters> = {
    blank: {
      value: ' ',
      replace: '&nbsp;'
    },
    greater: {
      value: '>',
      replace: '&gt;'
    },
    less: {
      value: '<',
      replace: '&lt;'
    }
  }
  constructor(_row: string, _keywords: Set<string>, _rule: Rule = {}) {
    this.row = _row
    this.keywords = _keywords
    this.rule = { ...Transition.InitRule, ..._rule }
  }

  /**
   * @description 标记双引号   java可以用双指针算法
   * @remark 只针对单行语句 ,多行必须抽象语法树
   * @date 20230331
   * @example
   *    原句: `printf("在第4的位置插入元素5：", "nihao test")`
   *    转换: `printf($[sign-quotation-start]在第4的位置插入元素5：$[sign-quotation-end], $[sign-quotation-start]nihao test$[sign-quotation-end])`
   */
  private signQuotation() {
    if (!this.rule.quotation) return this
    const matchs = [...this.row.matchAll(/"/g)]
    if (matchs.length < 2) return this
    if (matchs.length % 2 !== 0) matchs.pop()
    const matchIndexs = matchs.map((item) => item.index)
    let tempStr = ''

    for (let i = 0; i < matchIndexs.length; i++) {
      if (i === 0) {
        tempStr += this.row.substring(0, matchIndexs[i])
      } else {
        tempStr += this.row.substring(matchIndexs[i - 1] + 1, matchIndexs[i])
      }
      i % 2 === 0 ? (tempStr += Transition.Signs.quotationStart.value) : (tempStr += Transition.Signs.quotationEnd.value)
      if (i === matchIndexs.length - 1) {
        tempStr += this.row.substring(matchIndexs[i] + 1)
      }
    }

    this.row = tempStr
    return this
  }

  /**
   * @description 标记关键字
   * @remark 如果需要很严谨的判断 ,必须抽象语法树
   * @date 20230331
   */
  private signKeyword() {
    if (!this.rule.keyword) return this
    this.row = this.row
      .split(Transition.EntityCharacters.blank.value)
      .map((word) =>
        this.keywords.has(word) ? `${Transition.Signs.keywordStart.value}${word}${Transition.Signs.keywordEnd.value}` : word
      )
      .join(Transition.EntityCharacters.blank.value)
    return this
  }

  /**
   * @description 标记内容转为HTML
   * @date 20230331
   */
  private handleSigns() {
    for (const key in Transition.Signs) {
      const sign = Transition.Signs[key] as TSign
      this.row = this.row.split(sign.value).join(sign.html)
    }
    return this
  }

  /**
   * @description HTML字符实体处理
   * @remark 执行该函数一定要在 handleSigns 之前，因为handleSigns后携带字符实体
   * @example 例如 < > 空格     其中c语言就有<stdio.h>等语法
   * @link https://www.w3school.com.cn/html/html_entities.asp
   */
  private handleEntityCharacter() {
    for (const key in Transition.EntityCharacters) {
      const ec = Transition.EntityCharacters[key] as TEntityChar
      this.row = this.row.split(ec.value).join(ec.replace)
    }
    return this
  }

  public exec() {
    return this.signKeyword() // 1->2
      .signQuotation() // 1->2
      .handleEntityCharacter()
      .handleSigns().row // 2->3
  }
}

/**
 *1. #include <stdio.h>
 *2. $[sign-keyword-start]#include$[sign-keyword-end] <stdio.h>
 *3. <span class="sc-hl--keyword">#include</span> <stdio.h>
 */
