import { ServicesService } from './../services/services.service';
import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService, ServicesService]
})
export class CustomerModule {}
