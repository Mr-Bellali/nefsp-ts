import Footer from "@/components/Footer";
import CategorySelector from "@/components/marketplace/full-view/CategorySelector";
import PaginationBar from "@/components/marketplace/full-view/PaginationBar";
import ProductGrid from "@/components/marketplace/full-view/ProductGrid";
import Header from "@/components/marketplace/Header";
const Products = () => {
  return (
    <main className=" space-y-4 bg-white">
      <section className="lg:px-32 px-2 sm:px-10 space-y-4">
        <Header />
        <CategorySelector />
        <ProductGrid />
        <PaginationBar />
      </section>
      <Footer />
    </main>
  );
};

export default Products;
