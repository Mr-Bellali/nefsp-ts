"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductController = exports.getFoodCategoriesController = exports.getFoodSectionsController = exports.getSearchedProductsController = exports.getProductsController = void 0;
const common_1 = require("../models/common");
const getProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, common_1.getProducts)();
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json({ Error: error });
    }
});
exports.getProductsController = getProductsController;
const getSearchedProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key } = req.query;
        console.log(key);
        const searchedProducts = yield (0, common_1.getSearchedProducts)(key);
        return res.status(200).json(searchedProducts);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ Error: error });
    }
});
exports.getSearchedProductsController = getSearchedProductsController;
const getFoodSectionsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodSections = yield (0, common_1.getFoodSections)();
        return res.status(200).json(foodSections);
    }
    catch (error) {
        return res.status(500).json({ Error: error });
    }
});
exports.getFoodSectionsController = getFoodSectionsController;
const getFoodCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodCategories = yield (0, common_1.getFoodCategories)();
        return res.status(200).json(foodCategories);
    }
    catch (error) {
        return res.status(500).json({ Error: error });
    }
});
exports.getFoodCategoriesController = getFoodCategoriesController;
const getProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        const product = yield (0, common_1.getProduct)(id);
        return res.status(200).json(product);
    }
    catch (error) {
        return res.status(500).json({ Error: error });
    }
});
exports.getProductController = getProductController;
