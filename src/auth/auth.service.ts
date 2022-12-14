import { PrismaService } from 'prisma/prisma.service';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { loginDto } from './dto/dto-login';
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService) { }

  async loginCustomer(loginDto: loginDto) {
    const { email, password } = loginDto

    const customer = await this.prisma.customer.findUnique({
      where: {
        email
      }
    })
    if (!customer) {
      throw new NotFoundException('The user not does exists');
    }

    await bcrypt.compare(password, customer.password);

    if (password !== customer.password) {
      throw new NotFoundException("Usuário e/ou senha inválidos");
    }

    delete customer.password;

    return {
      token: this.jwtService.sign({ email }),
      customer,
    };
  }

  async loginClerck(loginDto: loginDto) {
    const { email, password } = loginDto

    const clerk = await this.prisma.clerk.findUnique({
      where: {
        email
      }
    })
    if (!clerk) {
      throw new NotFoundException('The user not does exists');
    }

    await bcrypt.compare(password, clerk.password);

    if (password !== clerk.password) {
      throw new NotFoundException("Usuário e/ou senha inválidos");
    }

    delete clerk.password;

    return {
      token: this.jwtService.sign({ email }),
      clerk,
    };
  }
}
