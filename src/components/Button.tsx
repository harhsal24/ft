import React, { useState } from "react";
import { NextPage } from "next";
import { ReactNode } from "react";
import Arrow from "./Arrow";

interface ButtonProps {
  height: number;
  width: number;
  children?: ReactNode;
}

const Button: NextPage<ButtonProps> = ({ height, width, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dynamicStyles = {
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <button
      className="rounded-xl bg-primary flex items-center justify-center text-text-white text-xl font-bold relative overflow-hidden"
      style={dynamicStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transition-all duration-500 ease-in-out  w-[14px] h-[73px] bg-white opacity-30 absolute left-[38px] rotate-12 ${
          isHovered ? "left-[400px]" : ""
        }`}
      ></div>
      <span>{children}</span>{" "}
      <span className="ml-2 mt-[1.9px] ">
        <Arrow />
      </span>
    </button>
  );
};

export default Button;
