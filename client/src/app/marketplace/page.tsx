import Footer from "@/components/Footer";
import Banner from "@/components/marketplace/Banner";
import BusinessDisplay from "@/components/marketplace/BusinessDisplay";
import Header from "@/components/marketplace/Header";
import Hero from "@/components/marketplace/Hero";
import JoinedBusinesses from "@/components/marketplace/JoinedBusinesses";
import MostSelled from "@/components/marketplace/MostSelled";
import PopularCategories from "@/components/marketplace/PopularCategories";
const Marketplace = () => {
  return (
    <main className=" space-y-4 bg-white">
      <section className="lg:px-32 px-2 sm:px-10 space-y-4">
        <Header />
        <Hero />
        <Banner />
        <MostSelled />
        <PopularCategories />
        <BusinessDisplay />
        <JoinedBusinesses />
      </section>
      <Footer />
    </main>
  );
};

export default Marketplace;
