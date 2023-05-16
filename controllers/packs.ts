import { Request, Response } from "express";
import { getPacksService } from "../services/packs";


export const getPacks = async (req: Request, res: Response) => {
    return res.send(await getPacksService())
}