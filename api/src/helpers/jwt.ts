import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

interface User {
  id: string;
  email: string;
  role: 'SELLER'| 'CONSUMER'|'ADMIN';
}

const generateToken = (user: User): string => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const secret = process.env.JWT_SECRET as string;
  const options: SignOptions = { expiresIn: "1h" };

  return jwt.sign(payload, secret, options);
};

const verifyToken = (token: any): JwtPayload | null => {
  try {
    if (!process.env.ACCESS_TOKEN_SECRET) {
      throw new Error("JWT secret not provided");
    }
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};

const decodeToken = (token:any) : User  => {
    return jwt.decode(token) as User
}

export { generateToken, verifyToken, decodeToken };
