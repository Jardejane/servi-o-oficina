import { dtoServiceCreate } from './dto/create-services';
import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Services')

@Controller('services')
export class ServicesController {
  constructor(private readonly services: ServicesService) { }

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async create(@Body() data: dtoServiceCreate) {
    return await this.services.createService(data)

  }
  @Get()
  async getAll() {
    return await this.services.getAllService()
  }
  @Get(':id')
  async getId(@Param("id") id: string) {
    return await this.services.getIdService(id)
  }
  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() data: dtoServiceCreate) {
    return await this.services.upadate(data, id)
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async delete(@Param('id') id: string) {
    return await this.services.remove(id)
  }
}
