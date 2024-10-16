import React from "react";
import { GoArrowRight } from "react-icons/go";
import useGetData from "../api/api";

function Library() {
  const { sources } = useGetData();

  return (
    <div className="bg-[#cccaca5d] mt-52">
      <div className="grid grid-cols-2 max-w-[1320px] mx-auto py-10 gap-10 justify-between">
        <div className="flex items-start bg-white p-8 rounded-[8px] gap-10">
          <img
            src="/assets/services/icons.png"
            alt="icons"
            className="w-[50px]"
          />
          <div>
            <h1 className="text-[22px] mb-3 text-[#253858]">Қонунлар</h1>
            {sources?.slice(0, 3).map((value, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <GoArrowRight className="text-[20px]" />
                <a
                  download
                  href={`https://test.uzloyal.uz/api/uploads/images/${value.src}`}
                  className="text-[18px] text-[#0d6efd] ease-in duration-500 hover:text-[#2e5691]"
                >
                  {value.category_name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start bg-white p-8 rounded-[8px] gap-10">
          <img
            src="/assets/services/icons.png"
            alt="icons"
            className="w-[50px]"
          />
          <div>
            <h1 className="text-[22px] mb-3 text-[#253858]">
              Олий суд Пленум қарорлари
            </h1>
            {sources?.slice(3, 22).map((value, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <GoArrowRight className="text-[20px]" />
                <a
                  download
                  href={`https://test.uzloyal.uz/api/uploads/images/${value.src}`}
                  className="text-[18px] text-[#0d6efd] ease-in duration-500 hover:text-[#2e5691]"
                >
                  {value.category_name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
