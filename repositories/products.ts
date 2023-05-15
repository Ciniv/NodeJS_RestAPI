import prisma from "./prismaClient";
import { Products } from '@prisma/client'


export const getProducts = async (): Promise<Products[]>=> {
    return await prisma.products.findMany();
}

export const getProductsByCode = async (code: number): Promise<Products | null>=> {
    return await prisma.products.findUnique({where:{code:code}});
}

