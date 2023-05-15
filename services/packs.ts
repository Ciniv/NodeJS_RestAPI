import { Packs } from '@prisma/client';
import { getPacks } from '../repositories/packs';

export const getPacksService = async (): Promise<Packs[]> => {
    return await getPacks();
}