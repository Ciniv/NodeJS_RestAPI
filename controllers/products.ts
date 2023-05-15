import { Request, Response } from "express";
import { getProductService, getProductsByCodeService } from "../services/products";


export const getProducts = async (req: Request, res: Response) => {
    res.send(await getProductService())
}

export const getProductsByCode = async (req: Request, res: Response) => {
    const { code } = req.params
    const ans = await getProductsByCodeService(parseInt(code))
    if (ans) {
        res.send(ans)
    } else {
        res.sendStatus(404)
    }
}