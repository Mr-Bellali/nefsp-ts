import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password : z.string(),
})


const StoreTypeSchema = z.enum([
    "Restaurant",
    "Cafe",
    "Buffet_restaurant",
    "Takeout_restaurant",
    "Sushi_restaurant",
    "Hotel_Bakery",
    "Pastry_shop",
    "Supermarket",
    "Beverage_shop",
    "Butcher_shop",
    "Fruit_vegetable_store",
    "Other",
  ]);
  

export const signupSchema = z.object({
    storename: z.string(),                        
    storeaddress: z.string(),                     
    storetype: StoreTypeSchema,          
    email: z.string().email("Invalid email address"), 
  });
  