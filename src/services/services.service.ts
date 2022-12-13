import { Injectable, NotFoundException } from '@nestjs/common';
import { dtoServiceCreate } from './dto/create-services';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ServicesService {

    constructor(private prisma: PrismaService) {}
 
    async createService(data: dtoServiceCreate): Promise<dtoServiceCreate> {
        const Exist = await this.prisma.services.findUnique({
            where: {
             id: data.id,
            },
          });
          
          if (Exist) {
            throw new NotFoundException('The user already exists');
          }
        const serviceNew = await this.prisma.services.create({ data })
        return serviceNew
    }

    async getAllService(): Promise<dtoServiceCreate[]> {
        return await this.prisma.services.findMany()
    }
    async getIdService(id): Promise<dtoServiceCreate> {
        const Exist = await this.prisma.services.findUnique({
            where: {
             id
            },
          });
          
          if (!Exist) {
            throw new NotFoundException('The user not does exists');
          }
          return await this.prisma.services.findUnique({
            where: {
                id
            }
        })
    }
    async upadate(data: dtoServiceCreate, id: string) {
        const Exist = await this.prisma.services.findUnique({
            where: {
             id
            },
          });
          
          if (!Exist) {
            throw new NotFoundException('The user not does exists');
          }

        return await this.prisma.services.update({
            data,
            where: {
                id
            }
        })
    }

    async remove(id: string){    
        const Exist = await this.prisma.services.findUnique({
        where: {
         id
        },
      });
      
      if (!Exist) {
        throw new NotFoundException('The user not does exists');
      }

        return await this.prisma.services.delete({
            where: {
                id
            }
        })
    }
 



}
