"use client";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { DarkButton } from "./ui/darkButton";

type FaqItemProps = {
  i: {
    question: string;
    answer: string;
  };
};

export default function Faq() {
  const faqs = [
    {
      question: `What are you check-in and check-out times?`,
      answer: `Answer to the question goes here. Answer to the question goes here.  Answer to the question goes here.  Answer to the question goes here. `,
    },
    {
      question: `Do you allow pets?`,
      answer: `Answer to the question goes here. Answer to the question goes here.  Answer to the question goes here.  Answer to the question goes here. `,
    },
    {
      question: `How do I get started with BookableSTR?`,
      answer: `Answer to the question goes here. Answer to the question goes here.  Answer to the question goes here.  Answer to the question goes here. `,
    },
  ];

  return (
    <div className="bg-white text-[#2E2F38] py-[40px] lg:py-[60px]  flex flex-col items-center justify-center">
      <div className="font-tangerine text-center font-bold lg:text-8xl text-5xl">
        Frequent
        <span className="custom-gradient-text">Asked</span> Questions
      </div>
      <div className="px-4 font-raleway font-medium text-lg mt-[14px] lg:mt-[20px] lg:text-2xl text-center">
        Here are some frequently asked questions
      </div>
      <div className="mt-[24px] font-raleway lg:mt-[40px]  rounded-[12px] p-4 lg:p-6 w-full max-w-[820px]">
        {faqs.map((i, index) => (
          <FaqItem i={i} key={index} />
        ))}
      </div>
      <div className="py-6">
        <p className="lg:text-2xl text-xl"> Still got more questions? </p>
        <DarkButton text="Contact Us" classname="w-[60px]  mt-4" />
      </div>
    </div>
  );
}

function FaqItem({ i }: FaqItemProps) {
  const [showanswer, setShowanswer] = useState(false);

  return (
    <div className="text-[#121212] border-[0.5px] border-l-[8px] my-4 rounded-2xl border-[#2E2F38] border-l-[#1B54A9] font-raleway  mt-[8px] lg:mt-[24px] first:mt-0  ">
      <div className="flex py-4  px-4 justify-between items-start gap-[60px]  ">
        <div className=" font-medium text-base lg:text-2xl w-full">
          {i.question}
        </div>
        <ChevronUp
          onClick={() => setShowanswer(!showanswer)}
          className={`text-[12px] flex-shrink-0 ${
            showanswer ? "rotate-180" : "rotate-0"
          } cursor-pointer`}
        />
      </div>
      <div
        className={`bg-[#e7eaf3] text-sm  lg:text-xl ${
          showanswer ? "h-max mt-2 px-4 lg:mt-4 py-4 rounded-b-2xl" : "h-0 mt-0"
        } overflow-hidden`}
      >
        {i.answer}
      </div>
    </div>
  );
}
