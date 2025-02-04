import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.model.js';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
