import prisma from "../utils/prisma";

const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        brand: true,
        foodCategory: true,
        profile: true,
        productImgs: true
        },
      });
    return products;
  } catch (error: any) {
    console.error(error.message);
    return error;
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
        brand: true,
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

// get food by id const 

const getProduct = async (id: number) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        idProduct:+id
      }
    })
    return product
  } catch (error) {
    return error
  }
}

export { getFoodCategories,getSearchedProducts, getProducts,getProduct };
