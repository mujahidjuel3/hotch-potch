import React from "react";
import packageData from "./data/packageData.json";

const PackageCard = () => {
  return (
    <section className="py-12 bg-gray-900 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-white font-semibold text-2xl md:text-4xl leading-snug">
            Make the wise decision <br /> for your business
          </h1>
          <h3 className="text-[#B7B8bb] mt-4 text-sm md:text-base">
            Choose from our affordable 3 packages.
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-20 justify-center items-stretch">
          {packageData.map((data) => (
            <div
              key={data.id}
              className="bg-[#12141D] p-6 sm:p-8 md:px-12 rounded-xl text-[#FAFAFA] flex flex-col h-full"
            >
              {/* Upper Section */}
              <div className="flex-grow">
                {/* Plan Title */}
                <h2 className="text-lg font-bold mb-4">{data.plan}</h2>

                {/* Price */}
                <div className="flex items-baseline space-x-1 mb-4">
                  <span className="text-3xl md:text-4xl font-semibold">
                    {data.price}
                  </span>
                  <span className="text-sm md:text-lg text-[#B7B8BB]">
                    {data.month}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#B7B8BB] mb-4">{data.description}</p>

                {/* Features */}
                <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
                <p className="text-[#B7B8bb]">{data.description1}</p>
              </div>

              {/* Lower Section (Button) */}
              <button className="px-4 py-2 mt-6 border border-gray-500 rounded-md text-white w-full hover:bg-gradient-to-r from-blue-600 to-pink-600 hover:opacity-90 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCard;
