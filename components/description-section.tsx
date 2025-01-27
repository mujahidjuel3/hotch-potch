import React from 'react';

const ProjectDescription = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-[#2e2e4e]">
          <h1 className="text-white text-2xl font-semibold text-center">
            Mixland helps you <br /> build beautiful website
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Left Navigation */}
          <div className="bg-gray-900 py-4 px-6">
          <ul className="space-y-2">
              <li className="border-gray-600 border text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gradient-to-r from-blue-700 to-pink-600">
                Blog Headlines
              </li>
              <li className="border-gray-600 border text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gradient-to-r from-blue-700 to-pink-600">
                Blog Intros
              </li>
              <li className="border-gray-600 border text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gradient-to-r from-blue-700 to-pink-600">
                Content Rewriter
              </li>
              <li className="border-gray-600 border text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gradient-to-r from-blue-700 to-pink-600">
                Facebook Ads
              </li>
              <li className="border-gray-600 border text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gradient-to-r from-blue-700 to-pink-600">
                Product Description
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-span-2 py-6 px-6 bg-[#12141D] rounded-md mt-4">
            {/* Color Dots */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>

            {/* Text Content */}
            <p className="text-[#FAFAFA] text-sm mb-6 ml-4">
              4 Blog Headlines Generated
            </p>

            {/* Headlines */}
            <ul className="space-y-2 text-white ml-4">
              <li className='border-t mt-2 pt-1 border-gray-600'>Create original content that ranks for SEO</li>
              <li className='border-t mt-2 pt-1 border-gray-600'>Any mechanical keyboard enthusiasts in design?</li>
              <li className='border-t mt-2 pt-1 border-gray-600'>The More Important the Work, the More Important the Rest</li>
              <li className='border-t mt-2 pt-1 border-gray-600'>How to design a product that can grow itself 10x in a year</li>
              <li className='border-t mt-2 pt-1 border-gray-600'>Any mechanical keyboard enthusiasts in design?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
