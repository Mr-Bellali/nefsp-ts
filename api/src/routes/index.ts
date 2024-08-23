import { Router } from "express";
import commonRouter from "./common";
import authRoutes from "./auth";

const routes = Router();

routes.use(commonRouter);
routes.use(authRoutes);

export default routes;