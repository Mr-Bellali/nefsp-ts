import { Router } from "express";
import commonRouter from "./common";
import authRoutes from "./auth";
import sellerProductRouter from "./seller";

const routes = Router();

routes.use(commonRouter);
routes.use(authRoutes);
routes.use(sellerProductRouter)

export default routes;