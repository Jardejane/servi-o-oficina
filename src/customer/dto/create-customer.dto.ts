import { IsString, IsEmail} from "class-validator";

export class CreateCustomerDto {
    @IsString()
    id :string;

    @IsString()
    name :string;

    @IsEmail()
    email: string;

    @IsString()
    cpf: string;

    @IsString()
    password : string;

    @IsString()
    address : string;
}
