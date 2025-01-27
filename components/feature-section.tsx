import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 grid gap-32 lg:grid-cols-2">
        {/* Left Section */}
        <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
  <div className="bg-[#FAFAFA] text-black p-6 rounded-lg  h-[32rem] md:h-[30rem] lg:h-[37rem] xl:h-[30rem]">
    <h4 className="text-lg sm:text-xl font-semibold mb-3">Results</h4>
    <p className="text-sm text-gray-700 mb-4">
      Here&apos;s what our AI came up with:
    </p>
    <ul className="space-y-3 bg-[#B7B8BB] px-3 py-2 rounded">
      <li className="text-sm md:text-base">
        <strong>Pain:</strong> You are an e-commerce business, and you want to
        sell your products all over the country, but you are confused about how
        to handle sales tax.
      </li>
      <li className="text-sm md:text-base">
        <strong>Agitate:</strong> You have no idea how much sales tax to charge
        your customers in each state.
      </li>
      <li className="text-sm md:text-base">
        <strong>Solution:</strong> Use TaxTool, our full-stack solution, to
        manage your sales tax.
      </li>
      <li className="text-sm md:text-base">
        <strong>Pain:</strong> You are an e-commerce business, and you want to
        sell your products all over the country, but you are confused about how
        to handle sales tax.
      </li>
      <li className="text-sm md:text-base">
        <strong>Agitate:</strong> You have no idea how much sales tax to charge
        your customers in each state.
      </li>
    </ul>

    {/* Absolute Positioned Dot Colors */}
    <div className="absolute top-56 sm:top-[14rem] right-4 sm:right-0 w-full max-w-[20rem] bg-white p-4 rounded-lg shadow-md">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
      <div className="w-full space-y-2 mt-4">
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-blue-600 h-full rounded-full w-2/5"></div>
        </div>
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-gray-300 h-full rounded-full w-full"></div>
        </div>
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-gray-300 h-full rounded-full w-3/5"></div>
        </div>
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-gray-300 h-full rounded-full w-2/5"></div>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Right Section */}
        <div className="space-y-10 h-[28rem]">
          {/* Feature 1 */}
          <div className=" rounded-lg  mt-10">
            <h3 className="text-4xl font-bold mb-4">
              Create content efficiently
              <br /> and quickly with great AI
              <br />
              writing tools
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              No Credit Card Required. The simplest way to get started. Best for
              free AI Writer Tool! Generate for ecom, social media, websites,
              sales, blogs etc. Card Required. The simplest way to get started.
              Best for free. AI Writer Tool! Generate for ecom, social media,
              websites, sales, blogs etc. Card Required. The simplest way to get
              started. Best for free. AI Writer Tool! Generate for ecom, social
              media, websites, sales, blogs etc. Card Required. The simplest way
              to get started. Best for free.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-600 rounded-md text-sm font-medium">
              Start 14 Days Free Trial
            </button>
          </div>

          {/* Feature 2 */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
