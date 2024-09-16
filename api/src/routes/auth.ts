import { Router } from "express";
import { loginController, sellerSignUpController } from "../controllers/auth";

const authRoutes = Router()


authRoutes.post("/signup",sellerSignUpController)
authRoutes.post("/login",loginController)

export default authRoutes