import prisma from "../utils/prisma";
import { v4 as uuidv4 } from 'uuid';
import { User } from '../utils/types'


const createUser = async ({ idUser, name, email, password, phoneNumber, addressData, cityId, profileType }: User) => {
  try {
    const user = await prisma.user.create({
      data: {
        idUser,
        name,
        email,
        password,
        phoneNumber,
        profile: {
          create: {
            idProfile: uuidv4(),
            role: profileType,
          },
        },
        adresses: {
          create: {
            addressData,
            cityId,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
};

export { createUser };