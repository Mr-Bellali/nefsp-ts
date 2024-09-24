import prisma from '../utils/prisma';


async function main() {
  // Creating categories
  const categories = await prisma.foodCategory.createMany({
    data: [
      { categoryName: 'Vegetables' },
      { categoryName: 'Fruits' },
      { categoryName: 'Dairy' },
      { categoryName: 'Meat' },
      { categoryName: 'Bakery' },
      { categoryName: 'Seafood' },
      { categoryName: 'Beverages' },
      { categoryName: 'Snacks' },
    ],
  });

  console.log('Categories seeded:', categories);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
