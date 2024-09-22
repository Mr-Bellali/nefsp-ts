import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Womanworking from '@/assets/woman-working.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FFCD00,#F5F5F5_66%)] ">
      <div className="container px-24 flex flex-row items-center ">
        <div className="flex-1">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-[#F54D42] to-[#FFCD00] text-transparent bg-clip-text">NEFSP</h1>
          <h3 className="text-3xl font-semibold tracking-tight mt-6">Reduce Food Waste, Save Money</h3>
          <p className="text-xl tracking-tight mt-2">Join our community-driven platform where you can buy and sell food items that are close to their expiration date.</p>
          <div className="flex gap-3 items-center mt-[30px]">
            <button className="btn">Start Selling</button>
            <button className="btn-text"> <span>Learn more</span><KeyboardArrowRightIcon /></button>
          </div>
        </div>
        <div className="ml-auto">
          <Image src={Womanworking} alt='woman working' 
            width={550}
            height={550}
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
