import { Router } from "express";
import {checkRoleMiddleware} from "../middlewares/tokenVerification";
import { addProductController } from "../controllers/seller"


const sellerProductRouter = Router();
 
const sellerRoleMiddleware = checkRoleMiddleware(['SELLER'])

sellerProductRouter.post("/seller/product"/*,sellerRoleMiddleware*/,addProductController)
sellerProductRouter.put("/seller/product",sellerRoleMiddleware)
sellerProductRouter.delete("/seller/product",sellerRoleMiddleware)


export default sellerProductRouter