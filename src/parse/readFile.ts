import { readFileSync } from 'fs'
import { resolve } from 'path'
import { FileType } from '../package/setFilePack'

type FileContent = {
  fileStr: string
  type: FileType
}

/**
 *
 * @returns {
 *  fileStr:文件文本内容 utf8
 *  type: 文件类型-FileType
 * }
 */
export function readFile(): FileContent {
  return {
    fileStr: readFileSync(resolve(__dirname, '../../template/template.java')).toString(),
    type: FileType.java
  }
}
