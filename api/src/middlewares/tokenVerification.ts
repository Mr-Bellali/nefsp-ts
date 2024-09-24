import { Request, Response, NextFunction, RequestHandler } from "express";
import { decodeToken, verifyToken } from '../helpers/jwt';

export interface AuthenticatedRequest extends Request {
    user?: any;
    userid?: string;
}

type AcceptedRoles = ['SELLER' | 'CONSUMER' | 'ADMIN', ...('SELLER' | 'CONSUMER' | 'ADMIN')[]];


export const checkRoleMiddleware =  (roles: AcceptedRoles): RequestHandler => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
        try {
            const authHeader = req.headers['authorization'] || req.headers['Authorization'];

            const token = authHeader && String(authHeader).split(' ')[1].trim();

            console.log("token:", token);

            const verifiedUser = verifyToken(token);
            if (verifiedUser) { 
                req.user = verifiedUser;
                const { role, idUser } = decodeToken(token);
                req.userid = idUser

                if (roles.includes(role)) {
                    next();
                } else {
                    res.status(403).send('You are not authorized');
                }
            }

        } catch (error: any) {
            console.error(error.message)
            res.status(error.statusCode || 500).json({ error: error.message })
        }
    }

}
