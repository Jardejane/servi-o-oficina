import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'prisma/prisma.service';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategyCustomer } from './jwt.strategy.customer';
import { JwtStrategyclerck } from './dto/jwt.strategy.clerk';


@Module({
  imports: [PassportModule.register({ defaultStrategy: "jwt" }), JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: "24h" }
  })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategyCustomer, JwtStrategyclerck]
})
export class AuthModule { }
