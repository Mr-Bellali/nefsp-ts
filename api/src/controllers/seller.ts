import { Request, Response } from "express";
import { ProductImageSchema, ProductSchema } from "../config/schemas";


export const addProductController =async (req:Request, res: Response) => {
    try {
        const parsedData = ProductSchema.safeParse(req.body)
        console.log(parsedData);
        if (!parsedData.success) {
            return res.status(400).json({error : `Invalid inputs ${parsedData.error.message}`})
        }

        const [productName, originalPrice, expirationDate, sellingPrice, stockQte, productDescription, idCategory, idProfile ] = parsedData.data


        const parsedImage = ProductImageSchema.safeParse(req.files)
        console.log("image: ",parsedImage);
        // if (!parsedImage.success){
        //     return res.status(400).json({error : `Invalid inputs ${parsedImage.error.message}`})
        // }


        return res.status(201).json({message: "it worked."})
    } catch (error) {
        console.log(error);
    }
}