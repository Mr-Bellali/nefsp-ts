import prisma from "../utils/prisma";
import { v4 as uuidv4 } from 'uuid';
import { StoreType } from '@prisma/client';



const createUser = async (
  idUser: string,
  name: string,
  email: string,
  password: string,
  addressData: string,
  cityId: number,
  storeName: string,
  storeType: StoreType,
  storeAddress: string,
  role: 'CONSUMER' | 'SELLER'
) => {
  try {
    const user = await prisma.user.create({
      data: {
        idUser,
        name,
        email,
        password,
        role,
        adresses: {
          create: {
            addressData,
            cityId,
          },
        },
        profile: role === 'SELLER' ? {
          create: {
            idProfile: uuidv4(), 
            storeName,
            storeType,
            storeAddress,
            storeImage: "", 
          },
        } : undefined,
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
    console.log("model's error: ", error)
    return error
  }
}

export { createUser, getUser };