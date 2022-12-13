import { IsString, IsUUID } from 'class-validator';
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
    customerId?: string

    // @ApiProperty()
    // createdAt?: Date

    // @ApiProperty()
    // updatedAt?: Date
    @IsUUID(undefined, {each: true})
    @ApiProperty()
    services : string[]
}
