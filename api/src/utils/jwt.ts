import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user: any, secretKey: any) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    isManager: user.isManager,
  };
  console.log('Token Payload:', payload);
  
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
}

export default generateToken;