import React from "react";
import img1 from "@/images/about.png";
import Image from "next/image";
import AposUp from "@/images/apostrophUp.png";
import AposDown from "@/images/appostrop.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import img2 from "@/images/image 21.png";
// import img3 from "@/images/image22.png";
import img4 from "@/images/img23.png";
import img5 from "@/images/img24.png";
import img6 from "@/images/img25.png";
import img7 from "@/images/img26.png";

const Testimonial = () => {
  return (
    <div className="text-black">
      <div className="pt-20 pb-4">
        <div className="relative">
          <div className="relative w-full h-[300px] overflow-hidden hidden md:flex gap-10">
            <div className="flex items-center gap-10">
              {/* <div className="flex flex-col gap-10">
                <Image src={img2} alt="pic1" width={200} height={200} />
                <Image src={img3} alt="pic2" width={200} height={200} />
              </div> */}
              {/* <Image src={img4} alt="pic3" width={200} height={200} /> */}
            </div>
            <Image src={img4} alt="pic3" className="mt-6 -mb-6 " />
            <Image src={img5} alt="pic5" className="shrink-0" />
            <Image src={img6} alt="pic6" className="mt-6 -mb-6 " height={700} />
            <Image src={img7} alt="pic7" className="shrink-0" />
            <Image
              src={img4}
              alt="pic3"
              width={200}
              height={500}
              className="mt-6 -pb-6 "
            />
            <div className="flex items-center gap-10">
              {/* <Image src={img4} alt="pic3" width={200} height={200} /> */}
              {/* <div className="flex flex-col gap-10">
                <Image
                  src={img2}
                  alt="pic1"
                  className="rounded-md"
                  width={200}
                  height={200}
                />
                <Image
                  src={img3}
                  alt="pic2"
                  className="rounded-md"
                  width={200}
                  height={200}
                />
              </div> */}
            </div>
          </div>
        </div>
        <Image src={img1} alt="about property" className="md:hidden block" />
        <div className="flex justify-center items-center flex-col py-20">
          <div className="font-tangerine text-center font-bold  lg:text-8xl text-5xl">
            About <span className="custom-gradient-text">your</span> host
          </div>
          <p className="px-4 font-raleway font-medium text-lg mt-[14px] lg:w-[60%] w-full lg:mt-[20px] lg:text-2xl text-center">
            Profile about the owner of the property goes here. Profile about the
            owner of the property goes here. Profile about the owner of the
            property goes here.
          </p>
        </div>
      </div>

      <div className=" ">
        <div className="font-raleway text-center font-bold lg:text-4xl text-2xl">
          Why <span className="custom-gradient-text">our guests</span> love
          staying here
        </div>
        <div className="flex px-2 gap-4 items-center">
          <button
            type="submit"
            className="text-[#FFFBFB] bg-[#1B54A9] opacity-[60%] rounded-full h-fit p-2"
          >
            <ArrowLeft />
          </button>
          <div className=" w-full -mt-32">
            <Image src={AposDown} alt="apos" />
          </div>
          <div>
            <p className=" font-raleway font-medium text-lg mt-[14px] lg:mt-[20px] lg:text-2xl">
              Testimonial goes here. Testimonial goes here. Testimonial goes
              here. Testimonial goes here. Testimonial goes here. Testimonial
              goes here. Testimonial goes here. Testimonial goes here.
            </p>

            <p className="uppercase pt-4 font-bold">Name goes here</p>
          </div>
          <div className="mt-16 w-full">
            <Image src={AposUp} alt="apos" />
          </div>

          <button
            type="submit"
            className="text-[#FFFBFB] bg-[#1B54A9] opacity-[60%]  h-fit rounded-full p-2"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
