import SellerPlatform from "@/assets/Seller-platform.png";
import Image from "next/image";
const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24">
      <div className="container">
        <div className="max-w-[600px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your sells </div>
          </div>
          <h2 className="text-center text-3xl md:[54px] md:leading=[60px] font-bold tracking-tighter mt-5">
            A more effective way to track your progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight mt-5">
            Effotlessly manage and orginize your sells and track youe profets.
          </p>
        </div>
        
        <Image
          src={SellerPlatform}
          alt="seller platform showcasing"
          className="mt-10 px-40"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
