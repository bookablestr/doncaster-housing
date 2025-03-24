import React from "react";
import { DarkButton } from "./ui/darkButton";

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
        <DarkButton text="Contact Bookable" classname="w-[60px] " />
      </div>
    </div>
  );
};

export default ThirdParty;
