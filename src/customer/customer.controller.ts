import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() data: CreateCustomerDto) {
    try {
      return this.customerService.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async getAll() {
    try {
      return this.customerService.getAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateCustomerDto,
  ) {
    try{
      return this.customerService.update(id, data);
    }catch(error){
      throw new Error(error)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
