import { Request, Response } from "express";
import { ProductSchema } from "../config/schemas";


export const addProductController = async (req: Request, res: Response) => {
    try {
        // Logging request body and uploaded file
        console.log("request body:", req.body);
        console.log("uploaded file:", req.file);
        
        // Validate product data
        const parsedData = ProductSchema.safeParse(req.body);
        console.log(parsedData);
        if (!parsedData.success) {
            return res.status(400).json({ error: `Invalid inputs: ${parsedData.error.message}` });
        }
        
        const { productName, originalPrice, expirationDate, sellingPrice, stockQte, productDescription, idCategory, idProfile } = parsedData.data;
        
        // Validate uploaded file (image)
        
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No images uploaded' });
        }

        const images = req.files as Express.Multer.File[];

        // Validate each image
        for (const image of images) {
            const { originalname, mimetype, buffer } = image;
            
            // Ensure the file is an image
            if (!['image/jpeg', 'image/png', 'image/gif'].includes(mimetype)) {
                return res.status(400).json({ error: 'Invalid image type' });
            }
        }

        
        
        return res.status(201).json({ message: "Product added successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};