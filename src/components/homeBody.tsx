import { features } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import PropertySlide from "./propertySlide";

const HomeBody = () => {
  return (
    <div className="text-black lg:py-16 py-10">
      <div className="flex lg:px-12 px-6 flex-col justify-center items-center gap-6">
        <h2 className="text-6xl custom-gradient-text font-bold lg:text-8xl">
          Header Text
        </h2>
        <p className="font-raleway lg:text-3xl text-xl lg:w-[80%] w-full text-center">
          Body text describing the property. Body text describing the property.
          Body text describing the property. Body text describing the property.
          Body text describing the property. Body text describing the property.
        </p>

        <div className="font-raleway grid lg:grid-cols-4 lg:px-12 px-6 grid-cols-2 gap-4 lg:gap-10">
          {features.map((feat, index) => (
            <div
              className={`border-[#ccc8c7] border-[0.5px] " ${
                index === 1 || index === 3
                  ? "mt-6 -mb-6 rounded-2xl"
                  : "rounded-2xl"
              }`}
              key={feat.id}
            >
              <Image src={feat.img} alt={feat.text} />
              <p className="text-xl lg:text-3xl text-center pb-6 py-8">
                {feat.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20">
        <div className="flex lg:px-12 items-center flex-col justify-center">
          <div className="font-tangerine font-bold text-center lg:text-8xl text-6xl">
            A<span className="custom-gradient-text">Better</span> Experience
          </div>
          <div className=" font-raleway  px-6 font-medium text-lg mt-[14px] lg:mt-[20px] lg:text-2xl text-center">
            Here’s why you should book directly with us
          </div>
        </div>
      </div>

      <div className="font-raleway text-[#FFFBFB] lg:text-2xl text-xs relative">
        {/* first bg */}
        <div className="absolute -mt-4 inset-0 bg-[#CCE9FF] lg:py-14 py-8 z-0"></div>
        {/* second */}
        <div className="lg:py-6 py-3 px-2 lg:px-0 custom-gradient w-full relative font-bold flex lg:gap-10 gap-2 lg:justify-center justify-normal items-center">
          <p>No booking fees</p>
          <div className="rounded-md lg:p-3 p-2 m-0 bg-[#FFFBFB]"></div>
          <p>Better rates and accommodations</p>
          <div className="rounded-md lg:p-3 p-2 bg-[#FFFBFB]"></div>
          <p>Know your host</p>
          <div className="rounded-md lg:p-3 p-2 bg-[#FFFBFB]"></div>
        </div>
      </div>

      <PropertySlide />
    </div>
  );
};

export default HomeBody;
