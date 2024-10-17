import React from "react";
import "./button.css";

const Button = ({ color }) => {
  return (
    <div className={`inline-block border text-center mt-8 border-[#cdb091]`}>
      <div>
        <button
          type="submit"
          className={`${
            color ? "hover:text-white" : "text-white"
          } px-10 links text-[14px] border-[1px] border-solid h-[40px] border-[#cdb091] w-full transform -translate-x-2 translate-y-[6px] relative overflow-hidden`}
        >
          Submit Now
        </button>
      </div>
    </div>
  );
};

export default Button;
