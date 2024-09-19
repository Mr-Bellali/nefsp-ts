import { Router } from "express";
import {checkRoleMiddleware} from "../middlewares/tokenVerification";
import { addProductController } from "../controllers/seller"
import { imageUpload } from "../middlewares/fileUpload";


const sellerProductRouter = Router();
 
const sellerRoleMiddleware = checkRoleMiddleware(['SELLER'])

sellerProductRouter.post("/seller/product"/*,sellerRoleMiddleware*/,imageUpload,addProductController)
sellerProductRouter.put("/seller/product",sellerRoleMiddleware)
sellerProductRouter.delete("/seller/product",sellerRoleMiddleware)


export default sellerProductRouter