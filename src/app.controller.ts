import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getThisHoroscopo(@Body() body: any) {
    return this.appService.getHoroscopo(body);
  }
}
