import { getFoodCategories, getFoodSections, getProduct, getProducts, getSearchedProducts } from "../models/common";
import { Request, Response } from 'express';

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
};

export const getSearchedProductsController = async (req: Request, res: Response) => {
  try {
    const { key } = req.query;
    console.log(key)
    const searchedProducts = await getSearchedProducts(key)
    return res.status(200).json(searchedProducts)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ Error: error });
  }
};

export const getFoodSectionsController = async (req: Request, res: Response) => {
    try {
        const foodSections = await getFoodSections();
        return res.status(200).json(foodSections)
    } catch (error) {
        return res.status(500).json({ Error: error });
    }
}

export const getFoodCategoriesController = async (req: Request, res: Response) => {
    try {
        const foodCategories = await getFoodCategories();
        return res.status(200).json(foodCategories)
    } catch (error) {
        return res.status(500).json({ Error: error });
    }
}

export const getProductController = async (req: Request, res: Response) => {
    try {

        const {id} = req.params
        console.log(id)

        const product = await getProduct(id);
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ Error: error });
    }
}