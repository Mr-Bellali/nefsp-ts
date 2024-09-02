import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "../../../public/logo.png";
import MenuIcon from "@/assets/menu.svg";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex justify-center items-center bg-black text-white text-small gap-3 ">
        <p className="text-white/60 hidden md:block">don't waste food</p>
        <div className="inline-flex gap-1 items-center">
          <p>Join us and start selling!</p>
          <Image
            src={ArrowRight}
            alt="arrow right"
            width={32}
            height={32}
            className="inline-flex justify-center items-center"
          />
        </div>
      </div>
      <div className="w-full px-24 bg-white shadow-lg">
        <div className="flex items-center justify-between max-w-full ">
          <Image src={Logo} alt="logo" height={70} width={70} />
          <Image
            src={MenuIcon}
            alt="menu"
            height={50}
            width={50}
            className="md:hidden"
          />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Businisses</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="bg-[#F54D42] text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tighter">Start shopping</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
