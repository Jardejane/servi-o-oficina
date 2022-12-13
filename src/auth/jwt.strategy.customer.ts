import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "prisma/prisma.service";


@Injectable()
export class JwtStrategyCustomer extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    });
  }

  async validate(payload: { email: string }) {
    const customer = await this.prisma.customer.findUnique({
      where: { email: payload.email }
    });

    if (!customer) {
      throw new UnauthorizedException(
        "Usuário não existe ou não está autenticado"
      );
    }

    delete customer.password;

    return customer;
  }


}
