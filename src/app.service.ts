import { Injectable } from '@nestjs/common';
import { parseCode } from './parse';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getCodeStr(): string {
    return parseCode();
  }
}
