import { IsEmail, IsString } from "class-validator";
export class CreateClerkDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: String;

  @IsString()
  isAdmin: String;
}
