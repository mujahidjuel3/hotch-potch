import React from 'react';
import { FaPlayCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <section className="text-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Write better<br /> 
            content for your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:underline">
  Facebook Ads
</span>

          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Artificial intelligence writing tool helps you create blogs,<br /> 
            social media websites and more.
          </p>
          <div className="justify-center space-y-4">
            {/* Start Free Trial Button */}
            <div>
              <button className="px-6 py-3  text-white bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg">
                Start 14 Days Free Trial
              </button>
            </div>
            {/* Watch a Demo Button */}
            <div className="flex justify-center items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3  hover:bg-gray-600 hover:text-white hover:rounded-md">
                <FaPlayCircle size={20} />
                Watch a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
