import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags ,ApiBearerAuth} from '@nestjs/swagger';
import { loginDto } from './dto/dto-login';
import { AuthGuard } from "@nestjs/passport";


@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/customer')
  @HttpCode(HttpStatus.OK)
  loginCustomer(@Body() Login:  loginDto){
    return this.authService.loginCustomer(Login)
  }
  @Post('/clerk')
  @HttpCode(HttpStatus.OK)
  loginClerc(@Body() Login:  loginDto){
    return this.authService.loginClerck(Login)
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  user () {
    return { message: "Autenticação bem sucedida" };
  }
}
