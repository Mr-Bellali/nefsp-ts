import { Request, Response, NextFunction, RequestHandler } from "express";
import { decodeToken, verifyToken } from '../helpers/jwt';

interface AuthenticatedRequest extends Request {
    user?: any;
}

type AcceptedRoles = ['SELLER' | 'CONSUMER' | 'ADMIN', ...('SELLER' | 'CONSUMER' | 'ADMIN')[]];

export const checkRoleMiddleware = (roles: AcceptedRoles) : RequestHandler => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
        try {
            const authHeader = req.headers['Authorization'];
            const token = authHeader && String(authHeader).split(' ')[1];
    
            if (token && verifyToken(token)) {
                console.log("verifyToken true", verifyToken);
                req.user = verifyToken(token);
                const  {role} = decodeToken(token) 
                if(roles.includes(role)){
                    next()
                }else{
                    res.status(403).send('You are not autherized');   
                }
            }else {
                res.status(401).send('You are not authenticated');
            }
    
        } catch (error: any) {
            console.error(error.message)
            res.status(error.statusCode || 500).json({error: error.message})
        }
    }
    
}
