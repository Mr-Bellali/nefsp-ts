import {
  getCategories,
  getCategory,
  getFoodCategories,
  getProduct,
  getProducts,
  getSearchedProducts,
  getTotalProductsCount,
} from "../services/common";
import { Request, Response } from "express";

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const pageNumber = parseInt(req.query.pagenumber as string || '1', 10);
    const limit = 30; 

    // Fetch products and total count
    const [products, totalCount] = await Promise.all([
      getProducts(pageNumber, limit),
      getTotalProductsCount()
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);

    // Send response with products and pagination info
    return res.status(200).json({
      data: products,
      meta: {
        totalItems: totalCount,
        currentPage: pageNumber,
        totalPages: totalPages,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
};

export const getSearchedProductsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { key } = req.query;
    console.log(key);
    const searchedProducts = await getSearchedProducts(key);
    return res.status(200).json(searchedProducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: error });
  }
};

export const getFoodCategoriesController = async (
  req: Request,
  res: Response
) => {
  try {
    const foodCategories = await getFoodCategories();
    return res.status(200).json(foodCategories);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
};

export const getProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const convertedId = Number(id);
    console.log(`recievied id: ${convertedId}`)

    if (!convertedId || Number.isNaN(convertedId)) {
      console.error("id is not a number");
      return res.status(400).json({
        error: "error while recieving the key value from the request",
      });
    }


    const product = await getProduct(convertedId);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
};


export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await getCategories()
    return res.status(200).json(categories)
  } catch (error: any) {
    return res.status(500).json({error : error.message})
  }
}

export const getCategoryController = async (req:Request, res:Response) => {
  try {
    const id = req.params['id']

    console.log(id)

    if (!id) {
      return res.status(400).json({error : "no id provided"})
    }

    const category = await getCategory(Number(id))

    if (!category) {
      return res.status(404).json({error : "no category found!"})
    }

    console.log(category)

    return res.status(200).json(category)

  } catch (error : any) {
    console.log(error)
    return res.status(500).json({error : `an internal error occured: ${error.message}`})
  }
}