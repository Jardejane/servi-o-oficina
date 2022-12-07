import { PrismaService } from './../../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClerkDto } from './dto/create-clerk.dto';
import { UpdateClerkDto } from './dto/update-clerk.dto';

@Injectable()
export class ClerkService {
   constructor(private prisma: PrismaService){}

  async create(data: CreateClerkDto): Promise<CreateClerkDto>{
    const emailExist = await this.prisma.clerk.findFirst({
      where:{
        email: data.email
      }
    })
    if(emailExist){
      throw new NotFoundException("The user already exists")
    }
    const employed = await this.prisma.clerk.create({
      data,
    })
    return employed
  }

  findAll() {
    return `This action returns all clerk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clerk`;
  }

  update(id: number, updateClerkDto: UpdateClerkDto) {
    return `This action updates a #${id} clerk`;
  }

  remove(id: number) {
    return `This action removes a #${id} clerk`;
  }
}
