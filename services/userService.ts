import { getUser, validateUser } from '../repositories/user';
import jwt from "jsonwebtoken";

export const loginUser = async (email: string, password: string) => {
    const user = await getUser(email);
    const isValidUser = await validateUser(email, password);
    if(!!user && isValidUser){
        const token = jwt.sign(user, "secret_key")
        return token    
    }
    return null;
}