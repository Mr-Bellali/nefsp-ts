import Image from "next/image";
import Logo from "../../../public/logo.png";
const Navbar = () => {
  return (
    <nav className="w-full h-[50px] px-40 mx-auto flex justify-between items-center">
      <div>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-[#F54D42] to-[#FFCD00] text-transparent bg-clip-text">
          NFSP
        </h1>
      </div>

      <div className="hidden md:flex gap-6 text-black/60 items-center font-bold">
        <a href="#" className="hover:text-[#F54D42]">Home</a>
        <a href="#" className="hover:text-[#F54D42]">Statistics</a>
        <a href="#" className="hover:text-[#F54D42]">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
