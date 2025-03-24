import React from "react";
import Map from "@/images/map.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-white text-black">
      <div className="lg:px-12 px-6 pt-10">
        <div className="font-tangerine px-4 text-center font-bold lg:text-8xl text-5xl">
          Get in <span className="custom-gradient-text">touch</span>
        </div>
        <div className="px-4 font-raleway font-medium text-lg mt-[14px] lg:mt-[20px] lg:text-2xl text-center">
          Body text about getting in touch goes here
        </div>

        <div className="rounded-2xl lg:px-12 px-0 lg:py-12 py-6 text-[#2E2F38]  flex flex-col justify-center items-center">
          <form className="flex flex-col gap-4 border-[0.5px] lg:w-1/2 w-full lg:p-12 p-6 border-[#2E2F3899] rounded-2xl justify-center items-center">
            <input
              type="text"
              className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] opacity-60"
              placeholder="Full name"
            />
            <input
              type="email"
              className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] opacity-60"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] opacity-60"
              placeholder="Subject of the message"
            />
            <textarea
              className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] opacity-60"
              placeholder="Enter your message"
            />

            <button className="w-full custom-gradient py-2 mt-6 font-bold font-quicksand rounded-full text-white text-lg lg:text-xl transition duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div>
        <Image src={Map} className="w-full" alt="map" />
      </div>
    </div>
  );
};

export default Contact;
