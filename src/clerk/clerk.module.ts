import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ClerkService } from './clerk.service';
import { ClerkController } from './clerk.controller';
@Module({
  controllers: [ClerkController],
  providers: [ClerkService, PrismaService]
})
export class ClerkModule {}
