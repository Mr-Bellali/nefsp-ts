import prisma from '../utils/prisma';

//npx tsx src/seeds/citiesSeed.ts

async function main() {
  // Define the cities data directly in the code
  const cities = [
    { id: 1, name: "Agadir" },
    { id: 2, name: "Ain Harrouda" },
    { id: 3, name: "Ait Melloul" },
    { id: 4, name: "Al Hoceima" },
    { id: 5, name: "Assilah" },
    { id: 6, name: "Azemmour" },
    { id: 7, name: "Azrou" },
    { id: 8, name: "Beni Mellal" },
    { id: 9, name: "Benslimane" },
    { id: 10, name: "Berkane" },
    { id: 11, name: "Boujdour" },
    { id: 12, name: "Boulemane" },
    { id: 13, name: "Casablanca" },
    { id: 14, name: "Chefchaouen" },
    { id: 15, name: "Chichaoua" },
    { id: 16, name: "Dakhla" },
    { id: 17, name: "El Jadida" },
    { id: 18, name: "El Kelaa des Sraghna" },
    { id: 19, name: "Errachidia" },
    { id: 20, name: "Essaouira" },
    { id: 21, name: "Fes" },
    { id: 22, name: "Figuig" },
    { id: 23, name: "Fnideq" },
    { id: 24, name: "Fquih Ben Salah" },
    { id: 25, name: "Guelmim" },
    { id: 26, name: "Guercif" },
    { id: 27, name: "Ifrane" },
    { id: 28, name: "Inezgane" },
    { id: 29, name: "Jerada" },
    { id: 30, name: "Kelaat Mgouna" },
    { id: 31, name: "Khenifra" },
    { id: 32, name: "Khouribga" },
    { id: 33, name: "Ksar El Kebir" },
    { id: 34, name: "Laayoune" },
    { id: 35, name: "Larache" },
    { id: 36, name: "Marrakech" },
    { id: 37, name: "Martil" },
    { id: 38, name: "M'diq" },
    { id: 39, name: "Meknes" },
    { id: 40, name: "Midelt" },
    { id: 41, name: "Mohammedia" },
    { id: 42, name: "Nador" },
    { id: 43, name: "Ouarzazate" },
    { id: 44, name: "Ouezzane" },
    { id: 45, name: "Oujda" },
    { id: 46, name: "Rabat" },
    { id: 47, name: "Safi" },
    { id: 48, name: "Sale" },
    { id: 49, name: "Settat" },
    { id: 50, name: "Sidi Bennour" },
    { id: 51, name: "Sidi Ifni" },
    { id: 52, name: "Sidi Kacem" },
    { id: 53, name: "Sidi Slimane" },
    { id: 54, name: "Skhirat" },
    { id: 55, name: "Tan-Tan" },
    { id: 56, name: "Tangier" },
    { id: 57, name: "Taounate" },
    { id: 58, name: "Taourirt" },
    { id: 59, name: "Taroudant" },
    { id: 60, name: "Taza" },
    { id: 61, name: "Temara" },
    { id: 62, name: "Tetouan" },
    { id: 63, name: "Tinghir" },
    { id: 64, name: "Tiznit" },
    { id: 65, name: "Youssoufia" },
    { id: 66, name: "Zagora" }
  ];

  // Seed the cities data
  for (const city of cities) {
    await prisma.city.create({
      data: {
        idCity: city.id,
        cityName: city.name,
      },
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
