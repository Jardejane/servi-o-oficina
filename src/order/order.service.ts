import { PrismaService } from 'prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
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
        products: {
          select: {
            name: true
          }
        }
      }
    })

  }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        Customer: {
          select: {
            name: true
          }
        },
        Clerk: {
          select: {
            name: true
          }
        },
        _count: {
          select: {
            products: true
          }
        }
      }
    })
  }

  async findOne(id: string) {
    const Exist = await this.prisma.order.findUnique({
      where: {
        id
      },
    });

    if (!Exist) {
      throw new NotFoundException('The user not does exists');
    }
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        Customer: {
          select: {
            name: true
          }
        },
        Clerk: {
          select: {
            name: true
          }
        },
        products: {
          select: {
            id: true,
            name: true,
            type: true
          }
        }
      }
    })
  }

}
