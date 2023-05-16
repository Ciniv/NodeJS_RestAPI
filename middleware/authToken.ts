import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = async(req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) {
        return res.sendStatus(401);
    }
    jwt.verify(token, "secret_key", (err, user)=>{
        if (err) return res.sendStatus(403);
        next()
    }) 
}