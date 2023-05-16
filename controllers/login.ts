import { Request, Response } from "express";
import { loginUser } from "../services/userService";


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const token = await loginUser(email, password);
    if(token){
        return res.json({token: token})
    }
    return res.sendStatus(401)
    
}
