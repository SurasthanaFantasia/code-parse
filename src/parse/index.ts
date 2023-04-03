import { Parse } from './Parse';
import { readFile } from './readFile';

export function parseCode(): string {
  const { fileStr, type } = readFile();
  const parse = new Parse(fileStr, type);
  return `${parse.exec()}`;
}
