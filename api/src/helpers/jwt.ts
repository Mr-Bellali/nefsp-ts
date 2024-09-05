import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";

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

const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const decodeToken = (token:string) : User  => {
    return jwt.decode(token) as User
}

export { generateToken, verifyToken, decodeToken };
