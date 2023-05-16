import prisma from "./prismaClient";
import { User } from '@prisma/client'


export const getUser = async (email: string) => {
    return await prisma.user.findUnique({
        where:{
            email:email
        }, 
        select:{
            name: true,
            email: true,
            role: true,
            password:false
        }
    })
}

export const validateUser = async (email: string, password: string): Promise<boolean> => {
    const isValidUser = await prisma.user.findFirst({where:{email:email, password:password}})
    if (isValidUser) {
        return true;
    }
    return false;
}