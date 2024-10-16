import React from "react";

const Button = () => {
  return (
    <div>
      <div
        className={`border-[1px] w-[20%] mx-auto text-center relative mt-8 h-[50px] border-solid border-[#cdb091]`}
      >
        <button
          type="submit"
          className={`text-[#cdb091]  text-[14px] hover:bg-[#cdb091] hover:text-white border-[1px] border-solid h-[50px] border-[#cdb091] w-full transform -translate-x-2 translate-y-[6px]`}
        >
          Submit Now
        </button>
      </div>
    </div>
  );
};

export default Button;
