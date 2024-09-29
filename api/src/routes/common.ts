import { Router } from "express";
import { getCategoriesController, getCategoryController, getFoodCategoriesController, getProductController, getProductsController, getSearchedProductsController } from "../controllers/common";

const commonRouter = Router()

commonRouter.get("/products",getProductsController)
commonRouter.get("/product",getSearchedProductsController)
commonRouter.get("/product/:id",getProductController)
commonRouter.get("/foodcategories",getFoodCategoriesController)
commonRouter.get("/categories",getCategoriesController)
commonRouter.get("/category/:id", getCategoryController)

export default commonRouter