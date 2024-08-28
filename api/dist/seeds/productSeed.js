"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../utils/prisma"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a user
        const user = yield prisma_1.default.user.create({
            data: {
                idUser: 'user1',
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: 'securepassword',
                phoneNumber: '1234567890',
                profile: {
                    create: {
                        idProfile: 'profile1',
                        pictureUrl: 'profile-pic.jpg',
                        role: 'SELLER', // Adjust this as needed
                    },
                },
            },
        });
        // Create a brand
        const brand = yield prisma_1.default.brand.create({
            data: {
                brandName: 'Acme Foods',
                brandDescription: 'Quality foods from Acme',
            },
        });
        const category = yield prisma_1.default.foodCategory.findFirst({
            where: { categoryName: 'Fresh Fruits' },
        });
        // Create product seeds
        const products = yield prisma_1.default.product.createMany({
            data: [
                {
                    productName: 'Apple',
                    originalPrice: 1.5,
                    expirationDate: new Date('2024-12-31'),
                    sellingPrice: 1.2,
                    stockOte: 100,
                    productDescription: 'Fresh and juicy apples',
                    idCategory: category.idCategory,
                    idBrand: brand.idBrand,
                    idProfile: user.profile.idProfile, // Updated to link to profile
                },
                {
                    productName: 'Banana',
                    originalPrice: 1.0,
                    expirationDate: new Date('2024-12-25'),
                    sellingPrice: 0.8,
                    stockOte: 200,
                    productDescription: 'Ripe and sweet bananas',
                    idCategory: category.idCategory,
                    idBrand: brand.idBrand,
                    idProfile: user.profile.idProfile, // Updated to link to profile
                },
                {
                    productName: 'Carrot',
                    originalPrice: 0.7,
                    expirationDate: new Date('2024-12-20'),
                    sellingPrice: 0.5,
                    stockOte: 150,
                    productDescription: 'Crunchy organic carrots',
                    idCategory: category.idCategory,
                    idBrand: brand.idBrand,
                    idProfile: user.profile.idProfile, // Updated to link to profile
                },
                {
                    productName: 'Tomato',
                    originalPrice: 1.2,
                    expirationDate: new Date('2024-12-15'),
                    sellingPrice: 1.0,
                    stockOte: 120,
                    productDescription: 'Fresh red tomatoes',
                    idCategory: category.idCategory,
                    idBrand: brand.idBrand,
                    idProfile: user.profile.idProfile, // Updated to link to profile
                },
                {
                    productName: 'Broccoli',
                    originalPrice: 2.0,
                    expirationDate: new Date('2024-12-10'),
                    sellingPrice: 1.7,
                    stockOte: 80,
                    productDescription: 'Organic green broccoli',
                    idCategory: category.idCategory,
                    idBrand: brand.idBrand,
                    idProfile: user.profile.idProfile, // Updated to link to profile
                },
            ],
        });
        // Optionally, create product images
        const productImages = yield prisma_1.default.productImage.createMany({
            data: [
                { imageFilename: 'apple.jpg', productId: products[0].idProduct },
                { imageFilename: 'banana.jpg', productId: products[1].idProduct },
                { imageFilename: 'carrot.jpg', productId: products[2].idProduct },
                { imageFilename: 'tomato.jpg', productId: products[3].idProduct },
                { imageFilename: 'broccoli.jpg', productId: products[4].idProduct },
            ],
        });
        console.log('Products and images seeded successfully!');
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.$disconnect();
}));
