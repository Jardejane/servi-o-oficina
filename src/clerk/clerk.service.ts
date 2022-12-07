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

async getAll() {
    return await this.prisma.clerk.findMany()
  }

  async getOne(id: string) : Promise<CreateClerkDto>{
   const clerkId =await this.prisma.clerk.findUnique({
    where:{
      id,
    }
   }) 
    if(!clerkId){
      throw new NotFoundException("clerk does not exists")
    }

    return clerkId
  }

 async update(id: string, data: UpdateClerkDto):Promise<CreateClerkDto> {
  const clerkId = await this.prisma.clerk.findUnique({
    where:{
      id,
    }
   }) 
    if(!clerkId){
      throw new NotFoundException("clerk does not exists")
    }

    return await this.prisma.clerk.update({
      data,
      where:{
        id,
      }
    })

  }

  remove(id: number) {
    return `This action removes a #${id} clerk`;
  }
}
