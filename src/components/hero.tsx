import React from "react";
import { Nav } from "./nav";
import { CalendarDays, MapPin, User } from "lucide-react";
import { DarkButton } from "./ui/darkButton";
import clsx from "clsx";

interface HeroProps {
  text1: string;
  text2: string;
  text3: string;
  availability: boolean;
  classname?: string;
}
const Hero = ({ text1, text2, text3, availability, classname }: HeroProps) => {
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
            <div className="bg-[#FFFBFB] md:text-2xl text-sm text-[#b2aeaf] border-[0.5px] grid grid-cols-2 md:grid-cols-4 rounded-[10px] border-[#b2aeaf]">
              <div className="border-r-[0.5px] md:border-b-0 border-b-[0.5px] p-4 flex gap-2 items-center">
                <MapPin color="#2E2F38" />
                Doncaster
              </div>

              <div className="border-r-[0.5px] md:border-b-0 border-b-[0.5px]  p-4 flex gap-2 items-center">
                <CalendarDays color="#2E2F38" />
                Arrival date
              </div>

              <div className="border-r-[0.5px] p-4 flex gap-2 items-center">
                <CalendarDays color="#2E2F38" />
                Departure Date
              </div>

              <div className="p-4 flex gap-2 items-center">
                <User color="#2E2F38" />
                No of Persons
              </div>
            </div>

            <DarkButton text="Confirm Availability" classname="mb-4 mt-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
