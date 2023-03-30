import { readFileSync } from 'fs';
import { resolve } from 'path';
import { FileType } from './fileType';

type FileContent = {
  fileStr: string;
  type: FileType;
};
export function readFile(): FileContent {
  return {
    fileStr: readFileSync(
      resolve(__dirname, '../../template/template.c'),
    ).toString(),
    type: FileType.c,
  };
}
