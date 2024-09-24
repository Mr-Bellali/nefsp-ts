import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


interface User {
  idProfile: string;
  name: string;
  email: string;
  role: 'SELLER' | 'ADMIN' | 'CUSTOMER';
}


const generateToken = (user: User, secretKey: any) => {
  try {
    const payload = {
      idProfile: user.idProfile,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    console.log('Token Payload:', payload);
    
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.log("jwt.ts error:",error)
    return error
  }
}

export default generateToken;