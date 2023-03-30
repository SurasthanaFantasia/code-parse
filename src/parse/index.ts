import { readFile } from './readFile';

export function parseCode(): string {
  const { fileStr, type } = readFile();
  console.log(fileStr.split('\n')[0]);
  return fileStr;
}
