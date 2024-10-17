import React from "react";
import "./button.css";

const Button = () => {
  return (
    <div>
      <div
        className={`border-[1px] w-[20%] mx-auto text-center relative mt-8 h-[50px] border-solid border-[#cdb091]`}
      >
        <button
          type="submit"
          className={`text-[#cdb091] links text-[14px] border-[1px] border-solid h-[50px] border-[#cdb091] w-full transform -translate-x-2 translate-y-[6px] relative overflow-hidden`}
        >
          Submit Now
        </button>
      </div>
    </div>
  );
};

export default Button;
