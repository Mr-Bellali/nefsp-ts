import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import LogoTicker from "@/components/landing/LogoTicker";
import Pricing from "@/components/landing/Pricing";
import ProductShowcase from "@/components/landing/ProductShowcase";

  export default function Home() {
    return (
      <>
        <Header />
        <Hero />
        <LogoTicker />
        <ProductShowcase />
        <Pricing />
      </>
    );
  }