import { CreateClerkDto } from 'src/clerk/dto/create-clerk.dto';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) { }

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

  async getAll(): Promise<CreateCustomerDto[]> {
    const clients = await this.prisma.customer.findMany()
    return clients
  }

  async update(id: string, data: UpdateCustomerDto): Promise<UpdateCustomerDto> {
    const clientId = await this.prisma.customer.findUnique({
      where: {
        id,
      }
    })

    if (!clientId) {
      throw new NotFoundException('The user not exists')
    }

    return await this.prisma.customer.update({
      data,
      where: {
        id,
      }
    })
  }

  async remove(id: string) {
    const clientId = await this.prisma.customer.findUnique({
      where: {
        id,
      }
    })
    if (!clientId) {
      throw new NotFoundException('Customer does not exists!')
    } else {
      await this.prisma.customer.delete({
        where: {
          id,
        }
      })
      return "your user was deleted"
    }
  }

}
