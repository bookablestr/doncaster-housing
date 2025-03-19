import clsx from "clsx";
import React from "react";

export const DarkButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "bg-primary-gradient text-text rounded-full w-[230px] h-[51px] lg:w-[320px] lg:h-[80px] p-[12px] space-x-[10px]  text-lg transition duration-300 transform hover:scale-105",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
