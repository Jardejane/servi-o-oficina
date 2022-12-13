import { Injectable } from '@nestjs/common';
import { dtoServiceCreate } from './dto/create-services';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ServicesService {

    constructor(private prisma: PrismaService) {}
 
    async createService(data: dtoServiceCreate): Promise<dtoServiceCreate> {
        return await this.prisma.services.create({ data })
    }

    async getAllService(): Promise<dtoServiceCreate[]> {
        return await this.prisma.services.findMany()
    }
    async getIdService(id): Promise<dtoServiceCreate> {
        return await this.prisma.services.findUnique({
            where: {
                id
            }
        })
    }
    async upadate(data: dtoServiceCreate, id: string) {
        return await this.prisma.services.update({
            data,
            where: {
                id
            }
        })
    }

    async remove(id: string){
        return await this.prisma.services.delete({
            where: {
                id
            }
        })
    }
 



}
