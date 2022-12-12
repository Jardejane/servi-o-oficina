import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'
export class CreateClerkDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  isAdmin: string;
}
