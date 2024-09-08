import prisma from "../utils/prisma";


const createUser = async ( idUser: string, name: string, email: string, password: string, phoneNumber:string, addressData: string, cityId: number, role: 'CONSUMER'|'SELLER') => {
  try {
    const user = await prisma.user.create({
      data: {
        idUser,
        name,
        email,
        password,
        phoneNumber,
        role,
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
    console.log("model's error: ", error)
    return error
  }
}

export { createUser, getUser };