import React from "react";
import Image from "next/image";
import Banner from "../public/banner/banner.svg";

const BannerSection = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto flex justify-center items-center p-6">
        <Image 
          src={Banner} 
          alt="Banner" 
          className="w-full h-auto object-contain" 
          priority 
        />
      </div>
    </div>
  );
};

export default BannerSection;
