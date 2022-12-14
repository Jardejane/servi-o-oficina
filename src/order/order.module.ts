import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from '../../prisma/prisma.service'
import { PassportModule } from '@nestjs/passport';



@Module({
  imports: [PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [OrderController],
  providers: [OrderService, PrismaService]
})
export class OrderModule { }
