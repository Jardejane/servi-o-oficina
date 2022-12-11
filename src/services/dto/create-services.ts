import { IsString } from 'class-validator';
export class dtoServiceCreate {
    @IsString()
    id : string 

    @IsString()
    name :string

    @IsString()
    type : string
 
}