import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'

export class loginDto {
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    password: string
}