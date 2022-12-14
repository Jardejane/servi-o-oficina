import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class dtoServiceCreate {
   
    @IsString()
    id: string

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    type: string

}