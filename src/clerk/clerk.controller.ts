import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClerkService } from './clerk.service';
import { CreateClerkDto } from './dto/create-clerk.dto';
import { UpdateClerkDto } from './dto/update-clerk.dto';

@ApiTags('Clerk')
@Controller('clerk')
export class ClerkController {
  constructor(private readonly clerkService: ClerkService) {}

  @Post()
 async create(@Body() data: CreateClerkDto) {
  try{
    return this.clerkService.create(data);
  }catch(error){
    throw new Error(error);
  }
  
  }

  @Get()
  async findAll() {
    try{
      return this.clerkService.getAll();
    }catch(error){
      throw new Error(error);
    }
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
      return this.clerkService.getOne(id);
    }catch(error){
      throw new Error(error);
    }
    
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body()data: UpdateClerkDto) {
    try{
      return await this.clerkService.update(id, data);
    }catch(error){
      throw new Error(error);
    }
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try{
      return this.clerkService.getAll();
    }catch(error){
      return this.clerkService.remove(id);
    }
    
  }

}
