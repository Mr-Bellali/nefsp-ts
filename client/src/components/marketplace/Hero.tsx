
"use client"

import HorizontalCarousel from "./HorizontalCarousel";
import VerticalCarousel from "./VerticalCarousel";

const Hero = () => {


  return (
    <section className="h-[87vh] space-x-6 flex flex-row justify-around">
        <div className="w-2/3 h-full bg-green-400 rounded-lg overflow-hidden">
            <HorizontalCarousel />
        </div>
        <div className="w-1/3 h-full bg-red-400 rounded-lg overflow-auto">
            {/* <VerticalCarousel /> */}
        </div>
    </section>
  );
};

export default Hero;
