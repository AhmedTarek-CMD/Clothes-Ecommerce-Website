import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 py-10 sm:py-0 flex items-center justify-center">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md-w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">BEST SELLER</p>
          </div>
          <h1 className="prata-regular leading-relaxed text-3xl lg:text-5xl sm:py-3">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md-w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img src={assets.hero_img} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;