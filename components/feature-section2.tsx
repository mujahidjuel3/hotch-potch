import React from "react";

const FeaturesSection2 = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 grid gap-32 lg:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-10 h-[28rem]">
          {/* Feature 1 */}
          <div className=" mt-10">
            <h3 className="text-4xl font-bold mb-4">
              Write that you want to <br /> convey through clear, &<br />
              authentic writting
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              No Credit Card Required. The simplest way to get started. Best for
              free AI Writer Tool! Generate for ecom, social media, websites,
              sales, blogs etc. Card Required. The simplest way to get started.
              Best for free. AI Writer Tool! Generate for ecom, social media,
              websites, sales, blogs etc. Card Required. The simplest way to get
              started. Best for free.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-600 rounded-md text-sm font-medium">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[22rem] md:w-[35rem] h-[35rem] lg:h-[35rem] relative items-center justify-center">
          <div className="gap-7 bg-white flex text-black p-6 rounded-lg shadow-md h-[30rem]">
            <div className="text-gray-300 text-xs space-y-4 mt-2">
              <p>Blog Outline</p>
              <p>Blog Intro</p>
              <p>Blog Conclusion</p>
              <p>AIDA</p>
              <p>PAS</p>
              <p>Content Rewriter</p>
              <div className="w-full px-0 space-y-5 mt-4">
                <div className="bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#B7B8BB] h-full rounded-full w-4/5"></div>
                </div>
                <div className="bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#B7B8BB] h-full rounded-full w-3/5"></div>
                </div>
                <div className="bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#B7B8BB] h-full rounded-full w-4/5"></div>
                </div>
                <div className="bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#B7B8BB] h-full rounded-full w-3/5"></div>
                </div>
                <div className="bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#B7B8BB] h-full rounded-full w-4/5"></div>
                </div>
                <div className="bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#B7B8BB] h-full rounded-full w-3/5"></div>
                </div>
                <div className="bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#B7B8BB] h-full rounded-full w-4/5"></div>
                </div>
                
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Results</h4>
              <p className="text-sm text-gray-700 mb-4">
                Here&apos;s what our AI came up with:
              </p>
              <div className="w-[15rem] md:w-[24rem]">
                <div className="w-full px-4 py-2  bg-[#FAFAFA] mt-40 rounded-md">
                  <div className="h-2 rounded-full overflow-hidden">
                    <div className="bg-[#B7B8BB] h-full rounded-full w-2/5"></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className=" h-2 rounded-full overflow-hidden">
                      <div className="bg-[#B7B8BB] h-full w-5/5"></div>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden">
                      <div className="bg-[#B7B8BB] h-full rounded-full w-4/5"></div>
                    </div>
                    <div className=" h-2 rounded-full overflow-hidden">
                      <div className="bg-[#B7B8BB] h-full rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 py-2 bg-[#FAFAFA] mt-4 p-4 rounded-md">
                  <div className=" h-2 rounded-full overflow-hidden">
                    <div className="bg-[#B7B8BB] h-full rounded-full w-2/5"></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className=" h-2 rounded-full overflow-hidden">
                      <div className="bg-[#B7B8BB] h-full w-5/5"></div>
                    </div>
                    <div className=" h-2 rounded-full overflow-hidden">
                      <div className="bg-[#B7B8BB] h-full rounded-full w-4/5"></div>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden">
                      <div className="bg-[#B7B8BB] h-full rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Absolute Positioned Dot Colors */}

              <div className="w-[15rem] md:w-[24em] h-[8rem] md:h-[7rem] bg-black p-4 absolute top-24 right-0 left-28 md:left-[140px] rounded-lg">
                <div className="w-full px-0 mt-1">
                  <div className="h-2 rounded-full overflow-hidden">
                    <div className="bg-[#FAFAFA] h-full rounded-full w-2/5"></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className=" h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FAFAFA] h-full w-5/5"></div>
                    </div>
                    <div className=" h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FAFAFA] h-full rounded-full w-4/5"></div>
                    </div>
                    <div className=" h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FAFAFA] h-full rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
