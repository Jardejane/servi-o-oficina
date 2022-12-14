import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClerkService } from './clerk.service';
import { CreateClerkDto } from './dto/create-clerk.dto';
import { UpdateClerkDto } from './dto/update-clerk.dto';

@ApiTags('Clerk')
@Controller('clerk')
export class ClerkController {
  constructor(private readonly clerkService: ClerkService) {}

  @Post()
 async create(@Body() data: CreateClerkDto) {

    return this.clerkService.create(data);
 
  
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async findAll() {
   
      return this.clerkService.getAll();
  
    
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {

      return this.clerkService.getOne(id);

    
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body()data: UpdateClerkDto) {
        return await this.clerkService.update(id, data);
 
    
  }

  @Delete(':id')
    @UseGuards(AuthGuard())
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.clerkService.remove(id);
  }

}
