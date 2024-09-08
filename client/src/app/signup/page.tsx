import Image from "next/image";
import Logo from "../../../public/logo.png";
import ManShopping from "@/assets/men-shopping-masculine.webp";
import Buisinessform from "@/components/signup/Buisinessform";

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
      <div className="w-full md:w-3/5 h-screen flex flex-col items-center justify-center">
        <div className="w-full h-[80px] px-5 flex md:hidden">
          <Image src={Logo} alt="logo" width={80} height={80} />
        </div>
        <div className="w-full h-full mx-auto flex items-center justify-center p-8">
          <Buisinessform />
        </div>
      </div>
    </div>
  );
};

export default page;
