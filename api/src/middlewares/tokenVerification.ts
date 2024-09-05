import { Request, Response, NextFunction } from "express";
import { verifyToken } from '../helpers/jwt';

interface AuthenticatedRequest extends Request {
    user?: any;
}

const authenticateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    try {
        const authHeader = req.headers['Authorization'];
        const token = authHeader && String(authHeader).split(' ')[1];

        if (token && verifyToken(token)) {
            console.log("verifyToken true", verifyToken);
            req.user = verifyToken(token);
            next()
        }else {
            res.status(401).send('You are not authenticated');
        }

    } catch (error: any) {
        console.error(error.message)
        res.status(error.statusCode || 500).json({error: error.message})
    }
}

export default authenticateUser