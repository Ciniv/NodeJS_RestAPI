import { Request, Response } from "express";
import { getPacksService } from "../services/packs";


export const getPacks = async (req: Request, res: Response) => {
    res.send(await getPacksService())
}