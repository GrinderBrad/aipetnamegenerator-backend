import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NameRequestDto } from './nameRequest.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("name")
  getName(@Body() dto: NameRequestDto): string {
    return this.appService.getName(dto.category, dto.gender, dto.country);
  }
}
