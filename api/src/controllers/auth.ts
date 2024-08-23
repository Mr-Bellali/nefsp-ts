import { v4 as uuidv4 } from 'uuid';
import hashPassword from '../utils/hashPassword';
import { createUser } from '../models/auth';

import { Request, Response } from 'express';

export const signUpController = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const userId = uuidv4();
    const { name, email, password, phonenumber, adress, cityId, profiletype } = req.body;

    console.log('id', userId);
    console.log('received data:', name, email, password, phonenumber, adress, cityId, profiletype);

    // Check if all required fields exist
    if (!name || !email || !password || !phonenumber) {
      return res.status(400).json({ error: 'The fields are required!' });
    }

    // Check if profiletype is "admin", and deny if it is
    if (profiletype?.toLowerCase() === 'admin') {
      return res.status(400).json({ error: 'You are not allowed to be an admin!' });
    }

    // Hash the password
    const hashedPass = await hashPassword(password);

    console.log('\n\n\n\nhashed pass: ', hashedPass, '\n\n\n\n\n\n\n\n');

    // Create the user
    const createdUser = await createUser({
      idUser: userId,
      name,
      email,
      password: hashedPass,
      phoneNumber: phonenumber,
      addressData: adress,
      cityId,
      profileType: profiletype,
    });

    return res.status(201).json({ user: createdUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
