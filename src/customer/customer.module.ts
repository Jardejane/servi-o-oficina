import { ServicesService } from './../services/services.service';
import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService, ServicesService]
})
export class CustomerModule {}
