import { dtoServiceCreate } from './dto/create-services';
import { Controller, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly services: ServicesService) {}

  @Post()
  async create(@Body() data:dtoServiceCreate){
   return await this.services.create(data)
  }
}
