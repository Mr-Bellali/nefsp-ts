const baseUrl = "http://127.0.0.1:8080/api/v1";

export const getProductsServices = async (pageNumber: number|undefined) => {
  try {

    if (pageNumber === undefined) {
      pageNumber = 1
    }

    const fetchRes = await fetch(
      `${baseUrl}/products?pagenumber=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    
    const res = await fetchRes.json();
    
    if (!fetchRes.ok) {
      throw new Error(res.error || "Something went wrong");
    }
    
    console.log("products: ", res);
    return res;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getCategoriesService = async () => {
  try {
    const fetchRes = await fetch(`${baseUrl}/categories`,{
      method: 'GET'
    })

    const res = await fetchRes.json();
    
    if (!fetchRes.ok) {
      throw new Error(res.error || "Something went wrong");
    }
    
    console.log("categories: ", res);
    return res;

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export const getProductService = async (productId: string) => {
  try {

    const fetchRes = await fetch(
      `${baseUrl}/product/${productId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    
    const res = await fetchRes.json();
    
    if (!fetchRes.ok) {
      throw new Error(res.error || "Something went wrong");
    }
    
    console.log("product: ", res);
    return res;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}


