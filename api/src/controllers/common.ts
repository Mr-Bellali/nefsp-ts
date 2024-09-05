import { getFoodCategories, getProduct, getProducts, getSearchedProducts } from "../models/common";
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
        
        const convertedId = Number(id)

        if (!convertedId || Number.isNaN(convertedId)) {
            console.error("id is not a number")
            return res.status(400).json({error: "error while recieving the key value from the request"})
        }

        const product = await getProduct(convertedId);
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ Error: error });
    }
}