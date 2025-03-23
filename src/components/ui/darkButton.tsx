import clsx from "clsx";
import React from "react";

export const DarkButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "custom-gradient font-bold font-quicksand text-white rounded-full w-full  lg:h-[60px] lg:py-1 lg:px-8 py-2 px-5 space-x-[10px]  text-lg lg:text-2xl transition duration-300 transform hover:scale-105",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
