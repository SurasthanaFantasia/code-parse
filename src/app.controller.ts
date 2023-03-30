import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('abababa');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getCode')
  getCode(): string {
    return this.appService.getCodeStr();
  }
}
