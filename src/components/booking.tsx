import { house } from "@/utils/constants";
import React from "react";
import Image from "next/image";
import { Bath, Bed } from "lucide-react";
import Link from "next/link";

const Booking = () => {
  return (
    <div className="py-20 text-[#2E2F38]">
      <div className="flex lg:px-12 px-6 flex-col justify-center items-center gap-2">
        <div className="font-tangerine text-center font-bold lg:text-8xl text-5xl">
          Available <span className="custom-gradient-text">short-lets</span>
        </div>
        <p className="px-4 font-raleway font-medium text-lg mt-[14px] lg:mt-[20px] lg:text-2xl text-center">
          Here is a detailed price list of each available property for rent
        </p>

        <div className="grid lg:grid-cols-3 px-6 lg:px-12 mt-10  py-2 font-raleway grid-cols-2 gap-10">
          {house.map((room) => (
            <div
              className="border-[#ccc8c7] border-[0.5px]  rounded-2xl "
              key={room.id}
            >
              <Image src={room.img} alt={room.apartment} />
              <div className="px-4 py-4">
                <p className="text-lg lg:text-xl font-medium">
                  {room.apartment}
                </p>
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

                <div className="flex justify-between my-4">
                  <div className="lg:text-3xl text-2xl font-bold harm">
                    <p className="lg:text-xl text-base font-bold">
                      {room.price}
                    </p>{" "}
                    <p className=" lg:text-xl text-base">/night</p>
                  </div>
                  <Link
                    href={"/"}
                    className="custom-gradient-text my-4 border-b border-custom-text-gradient"
                  >
                    View House
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
