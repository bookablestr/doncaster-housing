"use client";
import { property } from "@/utils/constants";
import React, { useState } from "react";
import Image from "next/image";
// import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const PropertySlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = 3.5;

  const mobileVisibleSlides = 1.5;

  const handleNavigation = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="py-20 text-black">
      <div>
        <div className="flex lg:px-12 px-6 items-center flex-col justify-center">
          <div className="font-tangerine custom-gradient-text font-bold lg:text-8xl text-6xl">
            Our Properties
          </div>
          <div className=" font-raleway font-medium text-lg mt-[14px] lg:mt-[20px] lg:text-2xl text-center">
            Body text goes here equally. Body text goes here equally.
          </div>
          {/* <div className="md:flex hidden gap-6">
            <CircleChevronLeft
              size={50}
              onClick={() => handleNavigation(currentIndex - 1)}
              className="hover:fill-[#dfd5c4] focus:fill-[#dfd5c4]"
            />
            <CircleChevronRight
              size={50}
              onClick={() => handleNavigation(currentIndex + 1)}
              className="hover:fill-[#dfd5c4] focus:fill-[#dfd5c4]"
            />
          </div> */}
        </div>

        <div className="relative overflow-hidden hidden md:block  my-10 w-full">
          <div
            className="flex gap-10 transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleSlides)
              }%)`,
              width: `${(property.length / visibleSlides) * 100}%`,
            }}
          >
            {property.map((property) => (
              <div
                className="border-[#ccc8c7] border-[0.5px] rounded-2xl"
                key={property.id}
              >
                <Image src={property.img} alt={property.description} />
                <div className="pb-6 px-2 py-8">
                  <p className="text-2xl lg:text-3xl">{property.description}</p>
                  <p className="text-xl lg:text-2xl py-2">
                    {property.features}
                  </p>
                  <p className="text-2xl pt-2 font-bold lg:text-3xl">
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden md:hidden block  my-10 w-full">
          <div
            className="flex gap-10 transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / mobileVisibleSlides)
              }%)`,
              width: `${(property.length / mobileVisibleSlides) * 100}%`,
            }}
          >
            {property.map((property) => (
              <div
                className="border-[#ccc8c7] border-[0.5px] rounded-2xl"
                key={property.id}
              >
                <Image src={property.img} alt={property.description} />
                <div className="pb-6 px-2 py-8">
                  <p className="text-2xl lg:text-3xl">{property.description}</p>
                  <p className="text-xl lg:text-2xl py-2">
                    {property.features}
                  </p>
                  <p className="text-2xl pt-2 font-bold lg:text-3xl">
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4">
        {Array.from({
          length: property.length - visibleSlides + 1,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex
                ? "bg-black"
                : "bg-gray-800 hover:bg-gray-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertySlide;
