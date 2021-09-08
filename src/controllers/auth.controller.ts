import { Request, Response} from "express";
import jwt from "jsonwebtoken";

class AuthController {

    signUp = () => {

    }

    signIn = (req: Request, res: Response) => {
        
        res.cookie('jwt', jwt.sign('payload', 'SECRET'), {httpOnly: true});
        res.end();
    }
}

export default new AuthController();