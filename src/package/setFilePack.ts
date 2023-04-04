import { commonKeyWords } from './common'
import { KeyWords_C } from './c'
import { KeyWords_CPP } from './cpp'
import { KeyWords_JAVA } from './java'

export enum FileType {
  c = 'c',
  cpp = 'cpp',
  java = 'java'
}

/**
 * @returns 返回代码类型关键字 用来高亮展示
 */
export function setFilePack(type: FileType): Set<string> {
  let KeyWords: Set<string>
  switch (type) {
    case FileType.c:
      KeyWords = KeyWords_C
      break
    case FileType.cpp:
      KeyWords = KeyWords_CPP
      break
    case FileType.java:
      KeyWords = KeyWords_JAVA
      break
    default:
      KeyWords = commonKeyWords
      break
  }
  return KeyWords
}
