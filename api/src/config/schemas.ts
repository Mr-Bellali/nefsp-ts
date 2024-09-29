import { z } from "zod";

const ProfileRoles = z.enum(["SELLER", "CONSUMER", "ADMIN"]);

const FoodCategorySchema: z.ZodType<any> = z.lazy(() => z.object({
  categoryName: z.string(),
  products: z.array(ProductSchema).optional(),
}));

const ProductSchema = z.object({
  productName: z.string(),
  originalPrice: z.coerce.number(), 
  expirationDate: z.coerce.date(),  
  sellingPrice: z.coerce.number(), 
  stockQuantity: z.coerce.number(),     
  description: z.string(), 
  idCategory: z.coerce.number(), 
});


const UpdateProductSchema = z.object({
  productName: z.string().optional(),
  originalPrice: z.coerce.number().optional(), 
  expirationDate: z.coerce.date().optional(),  
  sellingPrice: z.coerce.number().optional(), 
  stockQte: z.coerce.number().optional(),     
  description: z.string().optional(),
  idCategory: z.coerce.number().optional(), 
});


const TagSchema: z.ZodType<any> = z.lazy(() => z.object({
  idTag: z.number().int().optional(),
  nameTag: z.string(),
  products: z.array(ProductSchema).optional(),
}));

const CartSchema: z.ZodType<any> = z.lazy(() => z.object({
  idCart: z.number().int().optional(),
  total: z.number(),
  createdAt: z.date().optional(),
  modifiedAt: z.date().optional(),
  idProfile: z.string(),
  cartItems: z.array(CartItemSchema).optional(),
  order: OrderSchema.optional(),
}));

const CartItemSchema: z.ZodType<any> = z.lazy(() => z.object({
  idCartItem: z.number().int().optional(),
  quantity: z.number().int(),
  createdAt: z.date().optional(),
  modifiedAt: z.date().optional(),
  idProduct: z.number().int(),
  idCart: z.number().int(),
  product: ProductSchema,
  cart: CartSchema,
}));

const OrderSchema: z.ZodType<any> = z.lazy(() => z.object({
  idOrder: z.number().int().optional(),
  total: z.number(),
  createdAt: z.date().optional(),
  modifiedAt: z.date().optional(),
  idCart: z.number().int(),
  cart: CartSchema,
}));

const loginSchema = z.object({
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


 const signupSchema = z.object({
  storename: z.string(),                        
  storeaddress: z.string(),                     
  storetype: StoreTypeSchema,          
  email: z.string().email("Invalid email address"), 
});



// Export all schemas
export {
  FoodCategorySchema,
  ProductSchema,
  UpdateProductSchema,
  TagSchema,
  CartSchema,
  CartItemSchema,
  OrderSchema,
  ProfileRoles,
  loginSchema,
  signupSchema
};
