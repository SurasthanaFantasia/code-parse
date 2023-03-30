export enum FileType {
  c = 'c',
  cpp = 'cpp',
  java = 'java',
}

export function setFilePack(type: FileType) {
  switch (type) {
    case FileType.c:
      break;
    case FileType.cpp:
      break;
    case FileType.java:
      break;
    default:
      console.log(233);
  }
}
