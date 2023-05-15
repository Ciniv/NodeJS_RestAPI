import prisma from "./prismaClient";
import { Packs } from '@prisma/client'


export const getPacks = async (): Promise<Packs[]>=> {
    return await prisma.packs.findMany();
}