"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoles = exports.AddressSchema = exports.CitySchema = exports.ProfileSchema = exports.UserSchema = exports.OrderSchema = exports.CartItemSchema = exports.CartSchema = exports.TagSchema = exports.BrandSchema = exports.ProductImageSchema = exports.ProductSchema = exports.FoodCategorySchema = void 0;
const zod_1 = require("zod");
// Enums
const ProfileRoles = zod_1.z.enum(["SELLER", "CONSUMER", "ADMIN"]);
exports.ProfileRoles = ProfileRoles;
// Lazy schemas to handle circular dependencies
const FoodCategorySchema = zod_1.z.lazy(() => zod_1.z.object({
    categoryName: zod_1.z.string(),
    products: zod_1.z.array(ProductSchema).optional(),
}));
exports.FoodCategorySchema = FoodCategorySchema;
const ProductSchema = zod_1.z.lazy(() => zod_1.z.object({
    productName: zod_1.z.string(),
    originalPrice: zod_1.z.number(),
    expirationDate: zod_1.z.date(),
    sellingPrice: zod_1.z.number(),
    stockOte: zod_1.z.number().int(),
    productDescription: zod_1.z.string(),
    idCategory: zod_1.z.number().int(),
    idBrand: zod_1.z.number().int(),
    idProfile: zod_1.z.string(),
    foodCategory: FoodCategorySchema,
    brand: BrandSchema,
    profile: ProfileSchema,
    cartItems: zod_1.z.array(CartItemSchema).optional(),
    productImgs: zod_1.z.array(ProductImageSchema).optional(),
    tags: zod_1.z.array(TagSchema).optional(),
}));
exports.ProductSchema = ProductSchema;
const ProductImageSchema = zod_1.z.lazy(() => zod_1.z.object({
    idImage: zod_1.z.number().int().optional(),
    imageFilename: zod_1.z.string(),
    productId: zod_1.z.number().int(),
    product: ProductSchema,
}));
exports.ProductImageSchema = ProductImageSchema;
const BrandSchema = zod_1.z.lazy(() => zod_1.z.object({
    idBrand: zod_1.z.number().int().optional(),
    brandName: zod_1.z.string(),
    brandDescription: zod_1.z.string(),
    products: zod_1.z.array(ProductSchema).optional(),
}));
exports.BrandSchema = BrandSchema;
const TagSchema = zod_1.z.lazy(() => zod_1.z.object({
    idTag: zod_1.z.number().int().optional(),
    nameTag: zod_1.z.string(),
    products: zod_1.z.array(ProductSchema).optional(),
}));
exports.TagSchema = TagSchema;
const CartSchema = zod_1.z.lazy(() => zod_1.z.object({
    idCart: zod_1.z.number().int().optional(),
    total: zod_1.z.number(),
    createdAt: zod_1.z.date().optional(),
    modifiedAt: zod_1.z.date().optional(),
    idProfile: zod_1.z.string(),
    profile: ProfileSchema,
    cartItems: zod_1.z.array(CartItemSchema).optional(),
    order: OrderSchema.optional(),
}));
exports.CartSchema = CartSchema;
const CartItemSchema = zod_1.z.lazy(() => zod_1.z.object({
    idCartItem: zod_1.z.number().int().optional(),
    quantity: zod_1.z.number().int(),
    createdAt: zod_1.z.date().optional(),
    modifiedAt: zod_1.z.date().optional(),
    idProduct: zod_1.z.number().int(),
    idCart: zod_1.z.number().int(),
    product: ProductSchema,
    cart: CartSchema,
}));
exports.CartItemSchema = CartItemSchema;
const OrderSchema = zod_1.z.lazy(() => zod_1.z.object({
    idOrder: zod_1.z.number().int().optional(),
    total: zod_1.z.number(),
    createdAt: zod_1.z.date().optional(),
    modifiedAt: zod_1.z.date().optional(),
    idCart: zod_1.z.number().int(),
    cart: CartSchema,
}));
exports.OrderSchema = OrderSchema;
const UserSchema = zod_1.z.lazy(() => zod_1.z.object({
    idUser: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    phoneNumber: zod_1.z.string(),
    profile: ProfileSchema.optional(),
    adresses: zod_1.z.array(AddressSchema).optional(),
}));
exports.UserSchema = UserSchema;
const ProfileSchema = zod_1.z.lazy(() => zod_1.z.object({
    idProfile: zod_1.z.string(),
    pictureUrl: zod_1.z.string().optional(),
    role: ProfileRoles.default("CONSUMER"),
    idUser: zod_1.z.string(),
    user: UserSchema,
    products: zod_1.z.array(ProductSchema).optional(),
    carts: zod_1.z.array(CartSchema).optional(),
}));
exports.ProfileSchema = ProfileSchema;
const CitySchema = zod_1.z.lazy(() => zod_1.z.object({
    idCity: zod_1.z.number().int().optional(),
    cityName: zod_1.z.string(),
    adress: zod_1.z.array(AddressSchema).optional(),
}));
exports.CitySchema = CitySchema;
const AddressSchema = zod_1.z.lazy(() => zod_1.z.object({
    idAddress: zod_1.z.number().int().optional(),
    addressData: zod_1.z.string(),
    userId: zod_1.z.string(),
    cityId: zod_1.z.number().int(),
    user: UserSchema,
    city: CitySchema,
}));
exports.AddressSchema = AddressSchema;
