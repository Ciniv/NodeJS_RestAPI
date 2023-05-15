import { Products } from '@prisma/client';
import { getProducts, getProductsByCode } from '../repositories/products';

export const getProductService = async (): Promise<Products[]> => {
    return await getProducts();
}

export const getProductsByCodeService = async (code: number): Promise<Products | null> =>{
    return await getProductsByCode(code)
}