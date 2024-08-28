"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { getFoodCategoriesController, getFoodSectionsController, getProductController, getProductsController, getSearchedProductsController } from "../../controllers/common/index.js";
const commonRouter = (0, express_1.Router)();
// commonRouter.get("/products",getProductsController)
// commonRouter.get("/product",getSearchedProductsController)
// commonRouter.get("/product/:id",getProductController)
// commonRouter.get("/foodsections",getFoodSectionsController)
// commonRouter.get("/foodcategories",getFoodCategoriesController)
exports.default = commonRouter;
