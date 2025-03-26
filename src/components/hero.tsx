"use client";
import React, { useState } from "react";
import { Nav } from "./nav";
import { DarkButton } from "./ui/darkButton";
import clsx from "clsx";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { RiCalendar2Fill } from "react-icons/ri";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface HeroProps {
  text1: string;
  text2: string;
  text3: string;
  availability: boolean;
  classname?: string;
}
const Hero = ({ text1, text2, text3, availability, classname }: HeroProps) => {
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [showPersonDropdown, setShowPersonDropdown] = useState(false);

  const personOptions = ["1-5", "Less than 5", "5-10", "More than 10"];
  return (
    <div className="bg-[url('../images/hero.png')] bg-cover bg-no-repeat">
      <Nav />

      <div
        className={clsx(
          "flex flex-col justify-center items-center py-20 md:py-36 px-6",
          classname
        )}
      >
        <h1 className="text-center tracking-normal leading-[100%] text-2xl md:text-5xl font-bold text-[#FFFBFB] md:w-[60%] w-full">
          <span className="font-tangerine text-[100px]  text-[#CCE9FF]">
            {text1}
          </span>{" "}
          <span className="font-raleway">{text2}</span>{" "}
          <span className="font-tangerine text-[120px]  text-[#CCE9FF]">
            {text3}
          </span>
        </h1>

        {availability && (
          <div className="bg-[#FFFBFB] border-[#b2aeaf] border-[0.5px] p-6 mt-20 flex flex-col justify-center items-center rounded-3xl">
            <div className="bg-[#FFFBFB] md:text-2xl text-sm text-[#373841] border-[0.5px] grid grid-cols-2 md:grid-cols-4 rounded-[10px] border-[#b2aeaf]">
              <div className="border-r-[0.5px] md:border-b-0 border-b-[0.5px] p-4 flex gap-2 items-center">
                <FaMapMarkerAlt color="#2E2F38" />
                Doncaster
              </div>

              <div className="border-r-[0.5px] border-[#b2aeaf] md:border-b-0 border-b-[0.5px] p-4 flex gap-2 items-center cursor-pointer relative">
                <RiCalendar2Fill color="#2E2F38" />

                <DatePicker
                  selected={arrivalDate}
                  onChange={(date) => setArrivalDate(date)}
                  placeholderText="Arrival Date"
                  className="bg-transparent placeholder:text-[#373841] text-[#373841] outline-none cursor-pointer"
                  customInput={
                    <div className="flex gap-2 items-center">
                      <span className="cursor-pointer">
                        {arrivalDate
                          ? arrivalDate.toLocaleDateString()
                          : "Arrival Date"}
                      </span>
                    </div>
                  }
                />
              </div>

              <div className="border-r-[0.5px] border-[#b2aeaf] md:border-b-0 border-b-[0.5px] p-4 flex gap-2 items-center cursor-pointer relative">
                <RiCalendar2Fill color="#2E2F38" />

                <DatePicker
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                  placeholderText="Departure Date"
                  className="bg-transparent placeholder:text-[#373841] text-[#373841] outline-none cursor-pointer"
                  customInput={
                    <div className="flex gap-2 items-center">
                      <span className="cursor-pointer">
                        {departureDate
                          ? departureDate.toLocaleDateString()
                          : "Departure Date"}
                      </span>
                    </div>
                  }
                />
              </div>

              <div
                className="p-4 flex gap-2 items-center relative cursor-pointer"
                onClick={() => setShowPersonDropdown(!showPersonDropdown)}
              >
                <FaUser color="#2E2F38" />
                No of Persons
                {showPersonDropdown && (
                  <div className="absolute left-0 top-12 bg-white border border-gray-300 shadow-md rounded-md w-40 z-10">
                    {personOptions.map((option, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setShowPersonDropdown(false)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Link href="/booking">
              <DarkButton text="Confirm Availability" classname="mb-4 mt-6" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
