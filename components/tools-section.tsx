import React from 'react';
import toolData from "./data/toolData.json";
import Image from "next/image";

const ToolsSection = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className='text-3xl font-semibold'>54 exciting writing tools</h1>
        <h3 className="text-gray-400 mt-4">AI engines take information from various sources and read <br/>
        them like a human would do.</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 space-y-3 mt-16">
          {toolData.map((data) => (
            <div key={data.id} className="flex justify-center cursor-pointer items-center">
              <Image 
                src={data.image} 
                alt={`Tool ${data.id}`} 
                width={200} 
                height={100} 
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <h2 className='justify-center text-center cursor-pointer mt-12 hover:underline'>See all 54 avilable tools</h2>
      </div>
    </section>
  );
}

export default ToolsSection;
