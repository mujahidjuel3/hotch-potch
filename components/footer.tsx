import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 ">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20  text-center sm:text-left">
          {/* Column 1 */}
          <div className="">
            <h1 className="text-white text-lg font-bold">Company</h1>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 cursor-pointer hover:text-white">About</p>
              <p className="text-gray-400 cursor-pointer hover:text-white">Features</p>
              <p className="text-gray-400 cursor-pointer hover:text-white">Works</p>
              <p className="text-gray-400 cursor-pointer hover:text-white">Career</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="text-white text-lg font-bold">Help</h1>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 cursor-pointer hover:text-white">
                Customer Support
              </p>
              <p className="text-gray-400 cursor-pointer hover:text-white">
                Delivery Details
              </p>
              <p className="text-gray-400 cursor-pointer hover:text-white">
                Terms & Conditions
              </p>
              <p className="text-gray-400 cursor-pointer hover:text-white">
                Privacy Policy
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="text-white text-lg font-bold">Resources</h1>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 cursor-pointer hover:text-white">Free eBooks</p>
              <p className="text-gray-400 cursor-pointer hover:text-white">
                Development Tutorial
              </p>
              <p className="text-gray-400 cursor-pointer hover:text-white">How to - Blog</p>
              <p className="text-gray-400 cursor-pointer hover:text-white">Youtube Playlist</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h1 className="text-white text-lg font-bold">Links</h1>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 cursor-pointer hover:text-white">Free eBooks</p>
              <p className="text-gray-400 cursor-pointer hover:text-white">
                Development Tutorial
              </p>
              <p className="text-gray-400 cursor-pointer hover:text-white">How to - Blog</p>
              <p className="text-gray-400 cursor-pointer hover:text-white">Youtube Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
