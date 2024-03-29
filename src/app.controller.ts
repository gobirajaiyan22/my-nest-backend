import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller(['employee', 'student'])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('checking')
  getHello(): string {
    return this.appService.getHello();
  }
}
