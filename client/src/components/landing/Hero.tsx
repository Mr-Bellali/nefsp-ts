import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container px-24">
        <div>
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-[#F54D42] to-[#FFCD00] text-transparent bg-clip-text">NEFSP</h1>
            <h3 className="text-3xl font-semibold tracking-tight mt-6">Reduce Food Waste, Save Money </h3>
            <p className="text-xl tracking-tight mt-2">Join our community-driven platform where you can buy and sell food items that are close to their expiration date.</p>
            <div className="flex gap-1 items-center mt-[30px]">
                <button className="btn">Start Selling</button>
                <button className="btn-text">Learn more</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
