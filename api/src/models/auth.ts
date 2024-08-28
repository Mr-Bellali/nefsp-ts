import prisma from "../utils/prisma";
import { v4 as uuidv4 } from 'uuid';


const createUser = async ( idUser: string, name: string, email: string, password: string, phoneNumber:string, addressData: string, cityId: number, profileType: any ) => {
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


const getUser = async (email : string) =>{
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  } catch (error) {
    return error
  }
}

export { createUser, getUser };