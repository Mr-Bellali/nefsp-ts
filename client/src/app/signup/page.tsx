"use client"
import Image from "next/image";
import Logo from "../../../public/logo.png";
import ManShopping from "@/assets/men-shopping-masculine.webp";
import Buisinessform from "@/components/signup/Buisinessform";
import { FormProvider } from "@/components/signup/FormContext";
import FormStep from "@/components/signup/FormStep";
import MultiStepForm from "@/components/signup/MultiStepForm";


const page = () => {
  return (
    <div className="w-full h-screen flex flex-row bg-white">
      {/* Red section, hidden on tablet and phone */}
      <div
        className="hidden md:flex w-2/5 flex-col justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${ManShopping.src})` }}
      >
        <div className="w-full h-[100px] px-5 flex">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </div>
      </div>

      {/* signup form */}
      <div className="w-full md:w-3/5 h-full flex flex-col justify-center items-center ">
        <div className="w-full h-[80px] px-5 flex md:hidden ">
          <Image src={Logo} alt="logo" width={80} height={80} />
        </div>
        <div className="w-full h-full  flex items-start justify-center  px-38">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
};

export default page;
