import { PrismaService } from './../../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCustomerDto): Promise<CreateCustomerDto> {
    const emailExist = await this.prisma.customer.findFirst({
      where: {
        email: data.email,
      },
    });
    
    if (emailExist) {
      throw new NotFoundException('The user already exists');
    }

    const cliente = await this.prisma.customer.create({
      data,
    });

    return cliente;
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
