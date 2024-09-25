import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload images to Cloudinary
const uploadImageToCloudinary = (buffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "product_images" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          if (result?.secure_url) {
            resolve(result?.secure_url);
          } else {
            reject(new Error("Image upload failed, secure_url is undefined"));
          }
        }
      }
    );
    uploadStream.end(buffer);
  });
};

// Service to create a product
export const addProduct = async (
  productName: string,
  originalPrice: number,
  expirationDate: Date,
  sellingPrice: number,
  stockQte: number,
  productDescription: string,
  idCategory: number,
  idProfile: string,
  images: Express.Multer.File[]
) => {
  try {
    // Step 1: Create the product in the database
    const newProduct = await prisma.product.create({
      data: {
        productName,
        originalPrice,
        expirationDate,
        sellingPrice,
        stockQte,
        productDescription,
        idCategory,
        idProfile,
      },
    });

    // Step 2: Upload each image to Cloudinary and store the URLs
    const imageUploadPromises = images.map((image) =>
      uploadImageToCloudinary(image.buffer)
    );
    const imageUrls = await Promise.all(imageUploadPromises);

    // Step 3: Save the image URLs in the ProductImage table
    const productImages = imageUrls.map((url) => ({
      imageUrl: url,
      productId: newProduct.idProduct,
    }));

    await prisma.productImage.createMany({
      data: productImages,
    });

    // Return the new product with images
    return {
      newProduct,
      imageUrls,
    };
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Error adding product");
  }
};

export const getSellerProducts = async (idProfile: string, page: number) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        idProfile: idProfile,
      },
      skip: (page - 1) * 60,
      take: 60,
      include: {
        foodCategory: true,
        profile: true,
        productImgs: true,
      },
    });
    return products;
  } catch (error: any) {
    console.error(error.message);
    return error;
  }
};

export const profileExists = async (idUser: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { idUser: idUser },
      include: {
        profile: true,
      },
    });
    return user?.profile?.idProfile;
  } catch (error) {
    return error;
  }
};
