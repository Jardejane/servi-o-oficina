import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { dtoServiceCreate } from "src/services/dto/create-services"

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    id?: string

    @ApiProperty()
    @IsString()
    clerkId?: string 

    @ApiProperty()
    @IsString()
    customer?: string

    @ApiProperty()
    createdAt?: Date

    @ApiProperty()
    updatedAt?: Date

    @ApiProperty()
    services : dtoServiceCreate[]
}
