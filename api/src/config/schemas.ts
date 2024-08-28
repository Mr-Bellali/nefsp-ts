import { z } from "zod";

// Enums
const ProfileRoles = z.enum(["SELLER", "CONSUMER", "ADMIN"]);

// Lazy schemas to handle circular dependencies
const FoodCategorySchema: z.ZodType<any> = z.lazy(() => z.object({
  categoryName: z.string(),
  products: z.array(ProductSchema).optional(),
}));

const ProductSchema: z.ZodType<any> = z.lazy(() => z.object({
  productName: z.string(),
  originalPrice: z.number(),
  expirationDate: z.date(),
  sellingPrice: z.number(),
  stockOte: z.number().int(),
  productDescription: z.string(),
  idCategory: z.number().int(),
  idBrand: z.number().int(),
  idProfile: z.string(),
  foodCategory: FoodCategorySchema,
  brand: BrandSchema,
  profile: ProfileSchema,
  cartItems: z.array(CartItemSchema).optional(),
  productImgs: z.array(ProductImageSchema).optional(),
  tags: z.array(TagSchema).optional(),
}));

const ProductImageSchema: z.ZodType<any> = z.lazy(() => z.object({
  idImage: z.number().int().optional(),
  imageFilename: z.string(),
  productId: z.number().int(),
  product: ProductSchema,
}));

const BrandSchema: z.ZodType<any> = z.lazy(() => z.object({
  idBrand: z.number().int().optional(),
  brandName: z.string(),
  brandDescription: z.string(),
  products: z.array(ProductSchema).optional(),
}));

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
  profile: ProfileSchema,
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

const UserSchema: z.ZodType<any> = z.lazy(() => z.object({
  idUser: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phoneNumber: z.string(),
  profile: ProfileSchema.optional(),
  adresses: z.array(AddressSchema).optional(),
}));

const ProfileSchema: z.ZodType<any> = z.lazy(() => z.object({
  idProfile: z.string(),
  pictureUrl: z.string().optional(),
  role: ProfileRoles.default("CONSUMER"),
  idUser: z.string(),
  user: UserSchema,
  products: z.array(ProductSchema).optional(),
  carts: z.array(CartSchema).optional(),
}));

const CitySchema: z.ZodType<any> = z.lazy(() => z.object({
  idCity: z.number().int().optional(),
  cityName: z.string(),
  adress: z.array(AddressSchema).optional(),
}));

const AddressSchema: z.ZodType<any> = z.lazy(() => z.object({
  idAddress: z.number().int().optional(),
  addressData: z.string(),
  userId: z.string(),
  cityId: z.number().int(),
  user: UserSchema,
  city: CitySchema,
}));

// Export all schemas
export {
  FoodCategorySchema,
  ProductSchema,
  ProductImageSchema,
  BrandSchema,
  TagSchema,
  CartSchema,
  CartItemSchema,
  OrderSchema,
  UserSchema,
  ProfileSchema,
  CitySchema,
  AddressSchema,
  ProfileRoles,
};
