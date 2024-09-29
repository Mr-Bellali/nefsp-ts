import {  Response } from "express";
import { ProductSchema, UpdateProductSchema } from "../config/schemas";
import { AuthenticatedRequest } from "../middlewares/tokenVerification";
import { addProduct, deleteProduct, getSellerProduct, getSellerProducts, profileExists, updateProduct } from '../services/seller';
import { error } from "console";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


//should get the profile Id from the jwt and store it in 

export const addProductController = async (req: AuthenticatedRequest, res: Response) => {
  try {

    console.log("\n\n\n\n\n---------------add product controller--------------\n\n\n\n\n\n")
    console.log("request body:", req.body);
    console.log("uploaded file:", req.files);
    console.log("\n\n\n\n\n-----------------------------\n\n\n\n\n\n")

    const parsedData = ProductSchema.safeParse(req.body);
    console.log(parsedData.error);
    if (!parsedData.success) {
      return res.status(400).json({ error: `Invalid inputs: ${parsedData.error.message}` });
    }

    const { productName, originalPrice, expirationDate, sellingPrice, stockQuantity, description, idCategory } = parsedData.data;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded' });
    }
    const images = req.files as Express.Multer.File[];


    let idUser: string | undefined;

    if (req.userid != undefined) {
      idUser = req.userid 
    }

    console.log(`\n\n\n\n\n\n---------------------\nid user: ${idUser}\n---------------------\n\n\n\n\n`)


    //check if the profile exists 

    const idProfile = await profileExists(idUser as string)

    if (!idProfile) {
      return res.status(400).json({ error: 'Profile does not exist' });
  }


  console.log(`\n\n\n\n\n\n---------------------\nid profile: ${idProfile}\n---------------------\n\n\n\n\n`)

    const result = await addProduct(
      productName,
      Number(originalPrice),
      new Date(expirationDate),
      Number(sellingPrice),
      Number(stockQuantity),
      description,
      Number(idCategory),
      idProfile as string , 
      images
    );

    return res.status(201).json({ message: `Product added successfully`, product: result.newProduct, images: result.imageUrls });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getProductsController = async  (req: AuthenticatedRequest, res: Response) => {
  try {
    const userid = req.userid
    const pageNumber = parseInt(req.query.pagenumber as string || '1', 10);


    console.log("user id: ", userid);
    console.log("page number:", pageNumber)

    const profileid = await profileExists(userid as string)

    console.log("profile ")

    const sellerProducts = await getSellerProducts(profileid as string, pageNumber)
    console.log(sellerProducts)
    return res.status(200).json(sellerProducts); 
  } catch (error) {
    return res.status(500).json({ Error: error });
  }

}

export const getSellerProductController = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const productId = req.params['id']
    const userid = req.userid

    console.log("productID: ", productId, "\n", "userID : ", userid)


    if (!productId || !userid ) {
      res.status(400).json({error: `there's no product or user id is provided!!`})
    }


    const idProfile = await profileExists(userid as string)

    if (!idProfile || idProfile instanceof error){
      return res.status(404).json({error : 'id profile does not exists!'})
    }


    const product = await getSellerProduct(Number(productId), idProfile as string)

    if (!product) {
      return res.status(404).json({error: 'product not found'})
    }

    
    return res.status(200).json(product)


  } catch (error: any) {
    return res.status(500).json({ Error: error.message });
  }
}


export const updateProductController = async (req: AuthenticatedRequest, res: Response) => {
  try {

    console.log("\n\n\n\n\n---------------update product controller--------------\n\n\n\n\n\n")
    console.log("request body:", req.body);
    console.log("\n\n\n\n\n-----------------------------\n\n\n\n\n\n")


    const productId = req.params['id']

    const parsedData = UpdateProductSchema.safeParse(req.body);
    console.log(parsedData.error);
    if (!parsedData.success) {
      return res.status(400).json({ error: `Invalid inputs: ${parsedData.error.message}` });
    }

    const { productName, originalPrice, expirationDate, sellingPrice, stockQte, description, idCategory } = parsedData.data;



    let idUser: string | undefined;

    if (req.userid != undefined) {
      idUser = req.userid 
    }

    console.log(`\n\n\n\n\n\n---------------------\nid user: ${idUser}\n---------------------\n\n\n\n\n`)


    //check if the profile exists 

    const idProfile = await profileExists(idUser as string)

    if (!idProfile) {
      return res.status(400).json({ error: 'Profile does not exist' });
  }


  console.log(`\n\n\n\n\n\n---------------------\nid profile: ${idProfile}\n---------------------\n\n\n\n\n`)

    const result = await updateProduct(
      productName as string,
      Number(productId),
      Number(originalPrice),
      expirationDate ? new Date(expirationDate) : undefined,
      Number(sellingPrice),
      Number(stockQte),
      description as string,
      Number(idCategory)
    );

    return res.status(201).json({ message: `Product updated successfully`, product: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  } 
}; 

export const deleteProductController = async (req: AuthenticatedRequest, res : Response) => {
  try {

    const idProduct = Number(req.params['id']);


    if (!idProduct){
      return res.status(400).json({error : 'no product id is provided!'})
    }

    let idUser: string | undefined;

    if (req.userid != undefined) {
      idUser = req.userid 
    }
 

    const idProfile = await profileExists(idUser as string)

    if (!idProfile) {
      return res.status(400).json({ error: 'Profile does not exist' });
  }

  console.log("Deleting Product ID:", idProduct, "for Profile ID:", idProfile);
  
  const existingProduct = await getSellerProduct(Number(idProduct), idProfile as string)

  console.log("existing product", existingProduct)

    const result = await deleteProduct(Number(idProduct), idProfile as string)
   

    return res.status(200).json({ message: `Product deleted successfully`, product: result });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return res.status(404).json({ error: 'Product not found' });
    }
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}