import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClerkService } from './clerk.service';
import { CreateClerkDto } from './dto/create-clerk.dto';
import { UpdateClerkDto } from './dto/update-clerk.dto';

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
    return this.clerkService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clerkService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClerkDto: UpdateClerkDto) {
    return this.clerkService.update(+id, updateClerkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clerkService.remove(+id);
  }
}
