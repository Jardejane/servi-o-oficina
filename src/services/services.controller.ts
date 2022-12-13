import { dtoServiceCreate } from './dto/create-services';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Services')
@Controller('services')
export class ServicesController {
  constructor(private readonly services: ServicesService) {}

  @Post()
  async create(@Body() data:dtoServiceCreate){
    return await this.services.createService(data)
   
  }
  @Get()
  async getAll(){
    return await this.services.getAllService()
  }
  @Get(':id')
  async getId(@Param("id") id: string){
    return await this.services.getIdService(id)
  }
  @Patch(':id')
  async update(@Param('id')id: string, @Body()data: dtoServiceCreate){
    return await this.services.upadate(data, id)
  }

  @Delete(':id')
  async delete(@Param('id')id : string){
    return await this.services.remove(id)
  }
}
