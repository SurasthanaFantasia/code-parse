import { FileType, setFilePack } from 'src/package/setFilePack'
import { Transition } from './Transition'
import { setDefectInCodeHTML } from './defectInCode'

/**
 * @description 处理整个代码文本
 */
export class Parse {
  codeRows: string[]
  keywords: Set<string>
  constructor(fileStr: string, fileType: FileType) {
    this.codeRows = fileStr.split('\n')
    this.keywords = setFilePack(fileType)
  }

  /**
   * @description 翻译每行代码成HTML结构
   */
  private transitionRows() {
    const rows = []
    for (const row of this.codeRows) {
      rows.push(new Transition(row, this.keywords).exec())
    }
    this.codeRows = rows
    return this
  }

  /**
   * @description 给每行代码拼装上id 的html结构
   */
  private setLineHTML() {
    this.codeRows = this.codeRows.map((item, index) => {
      item = `<div id="sc-source--line__${index + 1}" class="sc-source--line"> 
                <span class="sc-line--number">${index + 1}</span>${item}${setDefectInCodeHTML(index)}</div>`
      return item
    })
    return this
  }

  /**
   * @description 将每行代码(数组形式) 转换成HTML文本
   */
  private joinRows() {
    const codeHTML = this.codeRows.reduce((pre, cur, index) => `${pre}${index === 0 ? '' : '\n'}${cur}`, '')
    return codeHTML
  }

  public exec() {
    return this.transitionRows().setLineHTML().joinRows()
  }
}
