import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { BackgroundofPages } from "../components/utils/backgoundOfPages";

function Documents(props) {
  const arizalar = [
    {
      category_name: "Бошқа фуқаролик низолари бўйича аризалар",
      category_id: 12,
    },
    {
      category_name: "Оилавий низолар бўйича аризалар",
      category_id: 10,
    },
    {
      category_name: "Уй-жой низолари бўйича аризалар",
      category_id: 9,
    },
    {
      category_name: "Меҳнат низолари бўйича аризалар",
      category_id: 11,
    },
  ];

  const shartnomalar = [
    {
      category_name: "Кўчмас мулкка оид шартномалар",
      category_id: 14,
    },
    {
      category_name: "Автотранспортларга оид шартномалар",
      category_id: 15,
    },
    {
      category_name: "Юридик шахсларга оид шартномалар",
      category_id: 16,
    },
  ];

  const talabnoma = [
    {
      category_name: "Shartnoma yuzasidan talabnoma",
      category_id: 18,
    },
  ];

  return (
    <div className="lg:mt-48 sm:mt-32 mt-24">
      <BackgroundofPages heading={"Documents"} text={"Documents"} />
      <div className="bg-[#cccaca5d]">
        <div className="myContainer">
          <div className="grid lg:grid-cols-2 lg:py-10 py-6 gap-10">
            {/* Arizalar Section */}
            <div className="flex md:flex-row flex-col items-start md:justify-start justify-center bg-white lg:p-8 p-4 rounded-lg md:gap-10 gap-4">
              <div className="flex justify-center items-center sm:w-auto w-full">
                <img
                  src="/assets/services/icons.png"
                  alt="icons"
                  className="w-[50px]"
                />
              </div>
              <div>
                <h1 className="heading3 mb-3 text-[#253858] sm:text-left text-center">
                  Аризалар
                </h1>
                {arizalar.map((value, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <GoArrowRight className="text-[20px]" />
                    <Link
                      to={`/category/${value.category_id}`}
                      className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                    >
                      {value.category_name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Shartnomalar Section */}
            <div className="flex md:flex-row flex-col items-start md:justify-start justify-center bg-white lg:p-8 p-4 rounded-lg md:gap-10 gap-4">
              <div className="flex justify-center items-center sm:w-auto w-full">
                <img
                  src="/assets/services/icons.png"
                  alt="icons"
                  className="w-[50px]"
                />
              </div>
              <div>
                <h1 className="heading3 mb-3 text-[#253858] sm:text-left text-center">
                  Шартномалар
                </h1>
                {shartnomalar.map((value, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <GoArrowRight className="text-[20px]" />
                    <Link
                      to={`/category/${value.category_id}`}
                      className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                    >
                      {value.category_name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Talabnoma Section */}
            <div className="flex md:flex-row flex-col items-start md:justify-start justify-center bg-white lg:p-8 p-4 rounded-lg md:gap-10 gap-4">
              <div className="flex justify-center items-center sm:w-auto w-full">
                <img
                  src="/assets/services/icons.png"
                  alt="icons"
                  className="w-[50px]"
                />
              </div>
              <div>
                <h1 className="heading3 mb-3 text-[#253858] sm:text-left text-center">
                  Шартномалар
                </h1>
                {talabnoma.map((value, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <GoArrowRight className="text-[20px]" />
                    <Link
                      to={`/category/${value.category_id}`}
                      className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                    >
                      {value.category_name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
