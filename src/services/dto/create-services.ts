import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class dtoServiceCreate {
    @ApiProperty()
    @IsString()
    id : string 

    @ApiProperty()
    @IsString()
    name :string

    @ApiProperty()
    @IsString()
    type : string
 
}