import { getDefectItemMap, dataArr } from './data'

/** 1.将该文件的所有缺陷取出 */
const defectItemMap = getDefectItemMap(dataArr)

//处理 < > 符号为转义字符
function escapeHtml(text: string) {
  return text.replace(/>/g, '&gt').replace(/</g, '&lt')
}

export const setDefectInCodeHTML = (line: number) => {
  const itemArr = defectItemMap[line + 1]
  if (!itemArr || itemArr.length === 0) return ''

  /** 2.拼接HTML */
  let itemHtml = ''
  for (const item of itemArr) {
    itemHtml += `<defect-card defectId="${item.defectId}" line="${item.startLine}" page="${item.page}" message="${escapeHtml(
      item.message
    )}"></defect-card>`
  }

  return `<div class="sc-defect--box"> ${itemHtml} </div>`
}
