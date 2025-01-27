import React from "react";
import reviewData from "./data/reviewData.json";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-white font-semibold text-4xl">
            What our customers say
          </h1>
          <h3 className="text-[#B7B8bb] mt-4">
            Read why thousands of marketers, writers and <br /> entrepreneurs
            love us so much.
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewData.map((data) => (
            <div
              key={data.id}
              className="bg-[#FAFAFA] p-6 rounded-xl hover:scale-90 transition-all shadow-lg text-[#12141d] flex flex-col items-start h-full"
            >
              {/* Profile Image */}
              <div className="flex gap-4 items-center w-full">
                <Image
                  src={data.image}
                  alt={`Profile ${data.id}`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{data.title}</h2>
                  <p className="text-[#B7B8bb]">{data.title2}</p>
                </div>
                <FaTwitter className="text-blue-400 text-xl" />
              </div>

              {/* Description */}
              <p className="text-start mt-4 text-[#12141d] flex-grow">
                {data.description}
              </p>

              {/* Tag */}
              <div className="mt-2 text-sm text-start text-blue-700">
                {data.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
