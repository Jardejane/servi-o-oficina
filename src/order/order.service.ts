import { PrismaService } from 'prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly pisma: PrismaService){}
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

}
