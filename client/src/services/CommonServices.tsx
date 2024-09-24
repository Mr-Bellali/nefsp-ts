const baseUrl = "http://127.0.0.1:3000/api/v1";

export const productServices = async (pageNumber: number) => {
  try {
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
