import { ArrowRight, Copyright } from "lucide-react";
import React from "react";
import bookablestr from "@/images/bookable.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className=" text-xl lg:2xl font-nunito">
      <div className="bg-[#1B54A9]  md:flex justify-between gap-20 lg:py-12 lg:pr-12 py-10 pr-6 text-[#FFFBFB]">
        <div className="lg:w-1/2">
          <div className="flex py-2 lg:flex-row lg:items-center items-start flex-col gap-4">
            <div className="lg:pl-6 pl-0">
              <Image
                src={bookablestr}
                alt="bookableStr logo"
                width={400}
                height={120}
                className="w-full"
              />
            </div>

            <p className="lg:border-l-2 border-0 lg:pl-2 pl-6 lg:-ml-6 w-[60%] lg:w-full  ml-0 border-[#FFFBFB] text-xl">
              Interested in getting a website similar to this. Send us a
              Message.
            </p>
          </div>

          <div className="flex gap-3 lg:pt-0 pt-6 lg:pl-12 pl-6">
            <input
              type="email"
              placeholder="Email address"
              className="placeholder:text-[#2E2F38] text-[#2E2F38] bg-[#FFFBFB] w-full rounded-xl p-4"
            />
            <button
              type="submit"
              className="bg-[#FFFBFB] text-[#1B54A9] rounded-xl p-4"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="lg:pl-0 pl-6">
          <div className="uppercase font-bold pb-2 pt-10 lg:pt-0">
            Navigation
          </div>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="lg:pl-0 pl-6">
          <div className="uppercase font-bold pb-2 pt-10 lg:pt-0">
            Information
          </div>
          <ul>
            <li>Phone: +447787458301</li>
            <li>Email: bookablestr@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="bg-white lg:px-16 px-6  py-6 text-[#2E2F38] md:flex justify-between  items-center">
        <div className="flex gap-2 items-center">
          <p>Copyright</p>
          <Copyright />
          <p>2025 BookableSTR</p>
        </div>
        <div className="flex gap-2 items-center">
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Terms & conditions</p>
        </div>
      </div>
    </div>
  );
}
