import React from "react";
import { DarkButton } from "./ui/darkButton";
import Link from "next/link";

const ThirdParty = () => {
  return (
    <div className="lg:px-12 px-6 lg:py-16 py-10 text-black">
      <div className="custom-third-gradient py-20  rounded-2xl  gap-5 flex flex-col justify-center items-center">
        <p className="font-quicksand lg:text-4xl text-2xl font-bold">
          Want a <span className="custom-gradient-text">website</span> like
          this?
        </p>
        <p className="font-nunito lg:text-2xl text-xl lg:w-[50%] font-medium text-center w-full">
          No third-party fees, increased profits, full control over your
          reservations.
        </p>
        <Link href="/contact-us">
          <DarkButton text="Contact BookableSTR" classname="w-[60px] " />
        </Link>
      </div>
    </div>
  );
};

export default ThirdParty;
