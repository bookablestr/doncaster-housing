import React from "react";
import { Nav } from "./nav";
import Link from "next/link";
import { house } from "@/utils/constants";
import { Bath, Bed, Heart } from "lucide-react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="">
      <div className="bg-[url('../images/hero.png')] bg-cover bg-no-repeat">
        <Nav />

        <div className="flex flex-col justify-center items-center py-20 md:py-36 px-6">
          <h1 className="text-center tracking-normal leading-[100%] text-2xl md:text-5xl font-bold text-[#FFFBFB] md:w-[60%] w-full">
            <span className="font-tangerine text-[100px]  text-[#CCE9FF]">
              Explore
            </span>{" "}
            <span className="font-raleway">our properties for short-term</span>{" "}
            <span className="font-tangerine text-[120px]  text-[#CCE9FF]">
              rental
            </span>
          </h1>

          <p className="w-full text-[#FFFBFB] text-center lg:w-[60%] pt-10 pb-20 text-2xl lg:text-3xl ">
            Our gallery displays all our available apartments available for
            short-term rentals.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 px-6 lg:px-12 mt-10  py-2 font-raleway grid-cols-1 gap-10">
        {house.map((room) => (
          <div
            className="border-[#ccc8c7] border-[0.5px] relative rounded-2xl "
            key={room.id}
          >
            <div className="bg-[#CCE9FF] text-[#2E2F38] p-2 rounded-full absolute m-4 right-0">
              <Heart />
            </div>
            <Image src={room.img} alt={room.apartment} />
            <div className="px-4 py-4">
              <p className="text-lg lg:text-xl font-medium">{room.apartment}</p>
              <p className="text-base lg:text-lg ">{room.location}</p>

              <div className="flex gap-2 my-2">
                <div className="flex gap-2">
                  <Bath />
                  {room.room}
                </div>
                <div className="flex gap-2">
                  <Bed />
                  {room.room}
                </div>
              </div>

              <div className="flex justify-between items-center my-4">
                <div className=" flex gap-1 items-center">
                  <p className="lg:text-xl text-base font-bold">{room.price}</p>{" "}
                  <p className=" lg:text-base text-sm">/night</p>
                </div>
                <Link
                  href={`/booking/${room.id}`}
                  className="custom-gradient-text font-bold my-4 border-b-custom-gradient"
                >
                  View House
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
