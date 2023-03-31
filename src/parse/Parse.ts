import { FileType, setFilePack } from 'src/package/setFilePack';
import { Transition } from './Transition';

/**
 * @description 处理整个代码文本
 */
export class Parse {
  codeRows: string[];
  keywords: Set<string>;
  constructor(fileStr: string, fileType: FileType) {
    this.codeRows = fileStr.split('\n');
    this.keywords = setFilePack(fileType);
  }

  transitionRows() {
    const rows = [];
    for (const row of this.codeRows) {
      rows.push(new Transition(row, this.keywords).exec());
    }
    this.codeRows = rows;
  }

  joinRows() {
    const codeHTML = this.codeRows.reduce(
      (pre, cur, index) => `${pre}${index === 0 ? '' : '\n'}${cur}`,
      '',
    );

    return codeHTML;
  }

  public exec() {
    console.log('exec');
  }

  // addLines() {
  //   this.rows = `<div id="sc-source--line__${this.rowIndex}" class="source-line">${this.rowIndex} ${this.rows}</div>`;
  //   return this;
  // }
}
