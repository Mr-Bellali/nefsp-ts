import React from "react";
import Image from "next/image";
import Bimoyat from "@/assets/bimoyat.png";
import Dairy from "@/assets/milk-dairy.jpeg";
import Energy from "@/assets/energy.jpeg";
import Cereals from "@/assets/cerialsjpg.jpg";

const PopularCategories = () => {
  return (
    <section className="w-full h-[755px] flex flex-col ">
      <div className="w-full h-[30px] mb-2 flex ">
        <h1 className="text-xl font-bold">Most Selled Food</h1>
      </div>
      <div className="flex">
        <div className="grid grid-cols-3 gap-4 w-full h-full">
          <div className="overflow-hidden border  rounded-xl flex flex-col gap-1 col-span-1 row-span-1 h-72 relative">
            <Image
              src={Bimoyat}
              alt="Dairy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[60px] font-bold">Buiscuits</span>
            </div>
          </div>
          <div className="overflow-hidden border rounded-xl flex flex-col gap-1 col-span-1 row-span-1 h-72 relative">
            <Image
              src={Cereals}
              alt="Cereals"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[60px] font-bold">Cereals</span>
            </div>
          </div>
          <div className="overflow-hidden border  rounded-xl flex flex-col gap-1 col-span-1 row-span-3 relative">
            <Image
              src={Energy}
              alt="Energy"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[60px] font-bold">Energy <br /> Drinks</span>
            </div>
          </div>
          <div className="overflow-hidden border  rounded-xl flex flex-col gap-1 col-span-2 row-span-2 h-80 relative">
            <Image
              src={Dairy}
              alt="Dairy"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[60px] font-bold">Dairy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
