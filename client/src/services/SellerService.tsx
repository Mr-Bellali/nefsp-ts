import Cookies from "js-cookie";
import { toast } from 'react-toastify';

const baseUrl = "http://127.0.0.1:3000/api/v1";

console.log("All cookies: ", Cookies.get());

const tokenFromCookie = Cookies.get("token");

console.log("madafaking token:", tokenFromCookie);

export const sellerGetProductServices = async (pageNumber: number) => {
  try {
    const fetchRes = await fetch(
      `${baseUrl}/seller/products?pagenumber=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenFromCookie}`
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

// Add a new product service 

export const sellerAddProductService = async (data: object) => {
  try {
    const fetchRes = await fetch(
      `${baseUrl}/seller/products`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenFromCookie}`
        },
        body: JSON.stringify(data)
      }
    );
    
    const res = await fetchRes.json();
    
    if (!fetchRes.ok) {
      throw new Error(res.error || "Something went wrong");
    }
    
    return res;
  } catch (error:any) {
    toast.error(error.message || "Failed to add product!");
    throw error; 
   }
};
