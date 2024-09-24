import {  Response } from "express";
import { ProductSchema } from "../config/schemas";
import { AuthenticatedRequest } from "../middlewares/tokenVerification";
import { addProduct, profileExists } from '../services/seller';


//should get the profile Id from the jwt and store it in 

export const addProductController = async (req: AuthenticatedRequest, res: Response) => {
  try {
    console.log("request body:", req.body);
    console.log("uploaded file:", req.files);

    const parsedData = ProductSchema.safeParse(req.body);
    console.log(parsedData);
    if (!parsedData.success) {
      return res.status(400).json({ error: `Invalid inputs: ${parsedData.error.message}` });
    }

    const { productName, originalPrice, expirationDate, sellingPrice, stockQte, productDescription, idCategory } = parsedData.data;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded' });
    }
    const images = req.files as Express.Multer.File[];


    let idProfile: string | undefined;

    if (req.userid != undefined) {
      idProfile = req.userid 
    }

    console.log(`\n\n\n\n\n\n---------------------\nid profile: ${idProfile}\n---------------------\n\n\n\n\n`)


    //check if the profile exists 

  //   const gottenProfile = await profileExists(idProfile as string)

  //   if (!profileExists) {
  //     return res.status(400).json({ error: 'Profile does not exist' });
  // }


    const result = await addProduct(
      productName,
      Number(originalPrice),
      new Date(expirationDate),
      Number(sellingPrice),
      Number(stockQte),
      productDescription,
      Number(idCategory),
      // idProfile as string , 
      "55b2f7c4-cecf-4a53-99d7-0b097c15194b",
      images
    );

    return res.status(201).json({ message: `Product added successfully`, product: result.newProduct, images: result.imageUrls });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
