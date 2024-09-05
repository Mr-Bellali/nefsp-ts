import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";

interface User {
  id: string;
  email: string;
  profile: string;
}

const generateToken = (user: User): string => {
  const payload = {
    id: user.id,
    email: user.email,
    profile: user.profile,
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

export { generateToken, verifyToken };
