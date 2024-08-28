import { Router } from "express";
import { loginController, signUpController } from "../controllers/auth";

const authRoutes = Router()


// authRoutes.post("/login",loginController)
authRoutes.post("/signup",signUpController)
authRoutes.post("/login",loginController)

export default authRoutes