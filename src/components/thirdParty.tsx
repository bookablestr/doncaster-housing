import React from "react";
import { DarkButton } from "./ui/darkButton";
import Link from "next/link";
import rightUp from "@/images/rightUp.png";
import rightDown from "@/images/rightDown.png";
import leftUp from "@/images/leftUp.png";
import leftDown from "@/images/leftDown.png";
import Image from "next/image";

const ThirdParty = () => {
  return (
    <div className="lg:px-12 px-6 lg:py-16 py-10 text-black relative">
      <div className="custom-third-gradient py-20 rounded-2xl gap-5 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Top Left */}
        <Image
          src={rightUp}
          alt="left up"
          className="absolute top-0 left-0 w-[100px] h-auto"
        />

        {/* Top Right */}
        <Image
          src={leftUp}
          alt="right up"
          className="absolute top-0 right-0 w-[100px] h-auto"
        />

        <p className="font-quicksand lg:text-4xl text-2xl font-bold">
          Want a <span className="custom-gradient-text">website</span> like
          this?
        </p>

        <p className="font-nunito lg:text-2xl text-xl lg:w-[50%] font-medium text-center w-full">
          No third-party fees, increased profits, full control over your
          reservations.
        </p>

        <Link href="/contact-us">
          <DarkButton text="Contact BookableSTR" classname="w-[60px]" />
        </Link>

        {/* Bottom Left */}
        <Image
          src={rightDown}
          alt="left down"
          className="absolute bottom-0 left-0 w-[100px] h-auto"
        />

        {/* Bottom Right */}
        <Image
          src={leftDown}
          alt="right down"
          className="absolute bottom-0 right-0 w-[100px] h-auto"
        />
      </div>
    </div>
  );
};

export default ThirdParty;
