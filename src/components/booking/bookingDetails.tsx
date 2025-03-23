import { house } from "@/utils/constants";
import { Bath, Bed, Heart, MapPin, Play } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bookingImg from "@/images/booking.png";

interface prop {
  onBookHouseClick: () => void;
}

const BookingDetails = ({ onBookHouseClick }: prop) => {
  return (
    <div>
      <div className="pt-20 pb-10 text-[#2E2F38]">
        <div className="block lg:flex gap-10 lg:px-12 px-8">
          {" "}
          <div className="flex flex-col gap-4 lg:w-1/2 w-full">
            <Image
              src={bookingImg}
              alt="booking img"
              width={700}
              height={300}
              className="h-[160px] w-[340px] lg:w-[700px] lg:h-[300px]"
            />
            <div className="flex gap-4">
              <Image
                src={bookingImg}
                alt="booking img"
                height={160}
                width={205}
                className="w-[95px] h-[60px] lg:h-[120px] lg:w-[170px]"
              />
              <Image
                src={bookingImg}
                alt="booking img"
                height={160}
                width={205}
                className="w-[95px] h-[60px] lg:h-[120px] lg:w-[170px]"
              />
              <Image
                src={bookingImg}
                alt="booking img"
                height={160}
                width={205}
                className="w-[95px] h-[60px] lg:h-[120px] lg:w-[170px]"
              />
            </div>
          </div>
          <div className="py-2 lg:py-0 lg:w-1/3 w-full">
            <p className="text-xl lg:text-2xl font-medium">
              2 Bedroom - Flat apartment for short-let rental
            </p>
            <div className=" flex gap-1 items-center pt-2">
              <p className="lg:text-2xl text-xl font-bold">€ 50.00</p>{" "}
              <p className=" lg:text-lg text-base">/night</p>
            </div>
            <div className="flex gap-2 pt-2">
              <MapPin />
              <p className="text-lg lg:text-xl ">Doncaster, United Kingdom</p>
            </div>

            <p className="py-6 text-lg lg:text-xl ">
              Brief description of the property goes here. Brief description of
              the property goes here. Brief description of the property goes
              here.
            </p>

            <div className="flex justify-between pt-6 lg:px-0 px-2">
              <button className="custom-gradient font-bold font-quicksand text-white rounded-full  px-4 py-2 flex gap-2 items-center  text-lg lg:text-xl transition duration-300 transform hover:scale-105">
                <Play className="text-[#1B54A9] bg-white px-1 rounded-full" />
                Play Video
              </button>

              <button
                onClick={onBookHouseClick}
                className="custom-gradient-text my-4 border-b-custom-gradient text-lg lg:text-xl font-bold font-quicksand"
              >
                Book House
              </button>
            </div>
          </div>
        </div>
        <div className="font-raleway lg:px-12 px-6 w-full py-10 flex lg:flex-row flex-col gap-10">
          <div className="border border-[#2E2F38] p-4 rounded-2xl  w-full lg:w-1/2">
            <p className="font-quicksand lg:text-4xl font-bold pb-4 text-2xl">
              Overview
            </p>
            <div className="lg:text-2xl text-xl">
              <p className="border-b-[0.5px] pt-2 border-[#2E2F38]">
                Category: <span className="font-bold">Apartments</span>
              </p>
              <p className="border-b-[0.5px] pt-2 border-[#2E2F38]">
                Number of bedrooms: <span className="font-bold">2</span>
              </p>
              <p className="border-b-[0.5px] pt-2 border-[#2E2F38]">
                Number of bathrooms <span className="font-bold">2</span>
              </p>
              <p className=" pt-2 ">
                Price <span className="font-bold">€ 50.00 / night</span>
              </p>
            </div>
          </div>

          <div className="border border-[#2E2F38] p-4 rounded-2xl  w-full lg:w-1/2">
            <p className="font-quicksand lg:text-4xl font-bold pb-4 text-2xl">
              Description
            </p>
            <div className="lg:text-2xl text-xl">
              <p className="border-b-[0.5px] pt-2 border-[#2E2F38]">Wifi</p>
              <p className="border-b-[0.5px] pt-2 border-[#2E2F38]">Netflix</p>
              <p className="border-b-[0.5px] pt-2 border-[#2E2F38]">
                Security and parking space
              </p>
              <p className=" pt-2 ">
                Fully fitted kitchen and running water in house
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:px-12 px-6 flex-col justify-center items-center gap-2">
          <div className="font-tangerine pt-16 text-center font-bold lg:text-8xl text-5xl">
            Similar to your{" "}
            <span className="custom-gradient-text">selection</span>
          </div>
          <p className="px-4 font-raleway font-medium text-lg mt-[14px] w-full lg:w-[50%] lg:mt-[20px] lg:text-2xl text-center">
            More short-lets similar to your previous selection
          </p>

          <div className="grid lg:grid-cols-3 px-6 lg:px-12 mt-10  py-2 font-raleway grid-cols-1 gap-10">
            {house.slice(0, 3).map((room) => (
              <div
                className="border-[#ccc8c7] border-[0.5px] relative rounded-2xl "
                key={room.id}
              >
                <div className="bg-[#CCE9FF] text-[#2E2F38] p-2 rounded-full absolute m-4 right-0">
                  <Heart />
                </div>
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

                  <div className="flex justify-between items-center my-4">
                    <div className=" flex gap-1 items-center">
                      <p className="lg:text-xl text-base font-bold">
                        {room.price}
                      </p>{" "}
                      <p className=" lg:text-base text-sm">/night</p>
                    </div>
                    <Link
                      href={`/booking/€{room.id}`}
                      className="custom-gradient-text my-4 border-b-custom-gradient"
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
    </div>
  );
};

export default BookingDetails;
