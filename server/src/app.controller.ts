import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import data from '../data';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any[] {
    return data as any[];
  }

  @Get('places')
  getPlaces(@Query() query: { page: string }): {
    data: any[];
    total: number;
    limit: number;
  } {
    const page = parseInt(query.page ?? '0');
    const limit = 5;

    return {
      data: data.slice(page, limit + page),
      total: data.length,
      limit,
    };
  }
}
