import React from "react";
import logoData from "./data/logoData.json";
import Image from "next/image";

const ClientSection = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-gray-400">
          Trusted by nearly 5000+ paying customers
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {logoData.map((data) => (
            <div
              key={data.id}
              className="flex justify-center items-center h-20"
            >
              <Image
                src={data.image}
                alt={`Logo ${data.id}`}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
