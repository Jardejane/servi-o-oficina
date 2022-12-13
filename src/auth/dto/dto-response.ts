import { CreateClerkDto } from "src/clerk/dto/create-clerk.dto";
import { CreateCustomerDto } from "src/customer/dto/create-customer.dto";
import { ApiProperty } from '@nestjs/swagger'

export class loginCustomerResponseDto{
    @ApiProperty()
    token:string;

    @ApiProperty()
    customer:CreateCustomerDto

    @ApiProperty()
    clerk :CreateClerkDto
}
