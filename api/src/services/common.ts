import prisma from "../utils/prisma";

const getProducts = async (page: number, limit: number) => {
  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        foodCategory: true,
        profile: true,
        productImgs: true,
      },
    });
    return products;
  } catch (error: any) {
    console.error(error.message);
    throw error; // Throw the error to be caught in the controller
  }
};


const getTotalProductsCount = async () => {
  try {
    const count = await prisma.product.count();
    return count;
  } catch (error: any) {
    console.error(error.message);
    throw error; // Handle error appropriately
  }
};


// get searched products

const getSearchedProducts = async (searchedKey: any) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { productName: { contains: searchedKey, lte: "insensitive" } },
          { productDescription: { contains: searchedKey, lte: "insensitive" } },
        ],
      },
      include: {
        foodCategory: true,
        profile: true,
        productImgs: true
      },
    });
    return products;
  } catch (error:any) {
    console.error(error.message);
    return error;
  }
};


// get food categories
const getFoodCategories = async () => {
  try {
    const categories = await prisma.foodCategory.findMany({
      include: {
        products: true, // Include related products
      },
    });
    return categories;
  } catch (error) {
    console.error("Error fetching food categories:", error);
    return error
  }
};

//get only categories 

const getCategories = async () => {
  try {
    const categories = await prisma.foodCategory.findMany({});
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return error
  }
};

// get food by id const 

const getProduct = async (id: number) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        idProduct:+id
      },
      include :{ 
        productImgs: true
      }
    })
    return product
  } catch (error) {
    return error
  }
}

// get category by id 

const getCategory = async (id: number) => {
  try {
    const category = await prisma.foodCategory.findFirst({
      where: {
        idCategory : id
      }
    })

    return category
  } catch (error) {
    return error
  }
}

export { getFoodCategories,getSearchedProducts, getProducts,getProduct, getCategories, getCategory, getTotalProductsCount};
