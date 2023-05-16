import { Request, Response } from "express";
import { getProductService, getProductsByCodeService } from "../services/products";


export const getProducts = async (req: Request, res: Response) => {
    return res.send(await getProductService())
}

export const getProductsByCode = async (req: Request, res: Response) => {
    const { code } = req.params
    const ans = await getProductsByCodeService(parseInt(code))
    if (ans) {
        return res.send(ans)
    } else {
        return res.sendStatus(404)
    }
}