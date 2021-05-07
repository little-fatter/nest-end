import { Controller, Get, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface'
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getHello(): string {
    return 'hello';
  }
  @Get('author')
  author(): string {
    return 'author';
  }
  @Get('create')
  create(): string {
    this.catsService.create({
      name:'test4',
      age:'19',
      breed:'country'
    })
    return 'save success'
  }
  @Get('findAll')
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
  @Get('delete')
  delete(@Query() query) {
    const { id } = query
    if( typeof id !== 'string') return '参数错误'
    return this.catsService.deleteById(id)
  }
}