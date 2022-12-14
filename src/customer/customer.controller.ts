import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ServicesService } from '../services/services.service'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Customer')

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService,
    private service: ServicesService) { }

  @Post()
  async create(@Body() data: CreateCustomerDto) {
    return await this.customerService.create(data);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async getAll() {

    return this.customerService.getAll();

  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() data: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, data);

  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  remove(@Param('id') id: string) {

    return this.customerService.remove(id);
  }

}
