import prisma from "../utils/prisma";

async function main() {
  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { idUser: 'user1' },
    include: {
      profile: true,
    },
  });

  let user;
  if (!existingUser) {
    // Create a user if it doesn't already exist
    user = await prisma.user.create({
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
      include: {
        profile: true,
      },
    });
  } else {
    // Use existing user
    user = existingUser;
  }

  if (!user.profile) {
    throw new Error('User profile not found');
  }

  // Create a brand
  const brand = await prisma.brand.create({
    data: {
      brandName: 'Acme Foods',
      brandDescription: 'Quality foods from Acme',
    },
  });

  // Create categories
  const categories = await prisma.foodCategory.createMany({
    data: [
      { categoryName: 'Fresh Fruits', idSection: 1 },  // Adjust idSection as needed
      { categoryName: 'Vegetables', idSection: 2 },
      { categoryName: 'Dairy Products', idSection: 3 },
      { categoryName: 'Bakery', idSection: 4 },
      { categoryName: 'Snacks', idSection: 5 },
    ],
    skipDuplicates: true, // Avoid creating duplicates if the script is run multiple times
  });

  // Find the category
  const freshFruitsCategory = await prisma.foodCategory.findFirst({
    where: { categoryName: 'Fresh Fruits' },
  });

  if (!freshFruitsCategory) {
    throw new Error('Category "Fresh Fruits" not found');
  }

  // Create product seeds
  const products = await prisma.product.createMany({
    data: [
      {
        productName: 'Apple',
        originalPrice: 1.5,
        expirationDate: new Date('2024-12-31'),
        sellingPrice: 1.2,
        stockOte: 100,
        productDescription: 'Fresh and juicy apples',
        idCategory: freshFruitsCategory.idCategory,
        idBrand: brand.idBrand,
        idProfile: user.profile.idProfile, // Ensure profile is defined
      },
      {
        productName: 'Banana',
        originalPrice: 1.0,
        expirationDate: new Date('2024-12-25'),
        sellingPrice: 0.8,
        stockOte: 200,
        productDescription: 'Ripe and sweet bananas',
        idCategory: freshFruitsCategory.idCategory,
        idBrand: brand.idBrand,
        idProfile: user.profile.idProfile, // Ensure profile is defined
      },
      {
        productName: 'Carrot',
        originalPrice: 0.7,
        expirationDate: new Date('2024-12-20'),
        sellingPrice: 0.5,
        stockOte: 150,
        productDescription: 'Crunchy organic carrots',
        idCategory: freshFruitsCategory.idCategory,
        idBrand: brand.idBrand,
        idProfile: user.profile.idProfile, // Ensure profile is defined
      },
      {
        productName: 'Tomato',
        originalPrice: 1.2,
        expirationDate: new Date('2024-12-15'),
        sellingPrice: 1.0,
        stockOte: 120,
        productDescription: 'Fresh red tomatoes',
        idCategory: freshFruitsCategory.idCategory,
        idBrand: brand.idBrand,
        idProfile: user.profile.idProfile, // Ensure profile is defined
      },
      {
        productName: 'Broccoli',
        originalPrice: 2.0,
        expirationDate: new Date('2024-12-10'),
        sellingPrice: 1.7,
        stockOte: 80,
        productDescription: 'Organic green broccoli',
        idCategory: freshFruitsCategory.idCategory,
        idBrand: brand.idBrand,
        idProfile: user.profile.idProfile, // Ensure profile is defined
      },
    ],
  });

  // Optionally, create product images
  const productImages = await prisma.productImage.createMany({
    data: [
      { imageFilename: 'apple.jpg', idProduct: products[0].idProduct },
      { imageFilename: 'banana.jpg', idProduct: products[1].idProduct },
      { imageFilename: 'carrot.jpg', idProduct: products[2].idProduct },
      { imageFilename: 'tomato.jpg', idProduct: products[3].idProduct },
      { imageFilename: 'broccoli.jpg', idProduct: products[4].idProduct },
    ],
  });

  console.log('Categories, products, and images seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
