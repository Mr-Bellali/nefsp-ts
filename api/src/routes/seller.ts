import { NextFunction, Request, Response, Router } from "express";
import {checkRoleMiddleware} from "../middlewares/tokenVerification";
import { addProductController } from "../controllers/seller"
import { upload } from "../middlewares/fileUpload";
import multer from "multer";


const sellerProductRouter = Router();
 
const sellerRoleMiddleware = checkRoleMiddleware(['SELLER'])

sellerProductRouter.post("/seller/product",sellerRoleMiddleware,  upload.array('images'), (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
    } else if (err) {
        return res.status(500).json({ error: err.message });
    }
    next();
}, addProductController);

sellerProductRouter.put("/seller/product",sellerRoleMiddleware)
sellerProductRouter.delete("/seller/product",sellerRoleMiddleware)

//get products 
//get a product


export default sellerProductRouter