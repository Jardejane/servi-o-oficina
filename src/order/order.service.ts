import { PrismaService } from 'prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) { }
  create(createOrderDto: CreateOrderDto) {
    const data: Prisma.OrderCreateInput = {
      Clerk: {
        connect: {
          id: createOrderDto.clerkId
        }
      },
      Customer: {
        connect: {
          id: createOrderDto.customerId
        }
      },
      products: {
        connect: createOrderDto.services.map((serviceId) => ({
          id: serviceId
        }))

      }
    }
    return this.prisma.order.create({
      data,
      select: {
        id: true,
        Clerk: {
          select: {
            name: true
          }
        },
        Customer: {
          select: {
            name: true
          }
        },
        products:{
          select:{
            name:true
          }
        }
      }
    })

  }

  findAll() {
    return this.prisma.order.findMany({
     select:{
      id: true,
      Customer:{
        select:{
          name: true
        }
      },
      Clerk:{
        select:{
          name:true
         }
      },
      _count:{
        select:{
          products:true
        }
      }
     }
    })
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

}
