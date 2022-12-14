import { IsString, IsEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDto {
    
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
    cpf: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsString()
    address: string;
}
