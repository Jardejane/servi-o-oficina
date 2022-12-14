import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

    @IsUUID(undefined, { each: true })
    @ApiProperty()
    services: string[]
}
