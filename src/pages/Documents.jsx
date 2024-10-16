import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

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
    <div className="bg-[#cccaca5d] mt-52">
      <div className="grid grid-cols-2 max-w-[1320px] mx-auto py-10 gap-10 justify-between">
        <div className="flex items-center bg-white p-8 rounded-[8px] gap-20">
          <img
            src="/assets/services/icons.png"
            alt="icons"
            className="w-[50px]"
          />
          <div>
            <h1 className="text-[22px] mb-3 text-[#253858]">Аризалар</h1>
            {arizalar?.map((value, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <GoArrowRight className="text-[20px]" />
                <Link
                  to={`/category/${value.category_id}`}
                  className="text-[18px] text-[#0d6efd] ease-in duration-500 hover:text-[#2e5691]"
                >
                  {value.category_name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center bg-white p-8 rounded-[8px] gap-20">
          <img
            src="/assets/services/icons.png"
            alt="icons"
            className="w-[50px]"
          />
          <div>
            <h1 className="text-[22px] mb-3 text-[#253858]">Шартномалар</h1>
            {shartnomalar?.map((value, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <GoArrowRight className="text-[20px]" />
                <Link
                  to={`/category/${value.category_id}`}
                  className="text-[18px] text-[#0d6efd] ease-in duration-500 hover:text-[#2e5691]"
                >
                  {value.category_name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center bg-white p-8 rounded-[8px] gap-20">
          <img
            src="/assets/services/icons.png"
            alt="icons"
            className="w-[50px]"
          />
          <div>
            <h1 className="text-[22px] mb-3 text-[#253858]">Шартномалар</h1>
            {talabnoma?.map((value, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <GoArrowRight className="text-[20px]" />
                <Link
                  to={`/category/${value.category_id}`}
                  className="text-[18px] text-[#0d6efd] ease-in duration-500 hover:text-[#2e5691]"
                >
                  {value.category_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
