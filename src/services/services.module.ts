import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [ServicesController],
  providers: [ServicesService, PrismaService]
})
export class ServicesModule { }
