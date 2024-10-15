import React from "react";
import { GoArrowRight } from "react-icons/go";
import icons from "../assets/images/icons.png";
import useGetData from "../api/api";

function Library() {
  const { sources } = useGetData();
  console.log(sources);

  // const qonunlar = [
  //   {
  //     category_name: "Адвокатура тугрисида конун..doc",
  //     id: 1,
  //   },
  //   {
  //     category_name: "адвокат_каволатларива_иж_химояси..doc",
  //     id: 2,
  //   },
  //   {
  //     category_name: "тергов хибсхона коида..doc",
  //     id: 3,
  //   },
  // ];

  // const oliysud = [
  //   {
  //     category_name: "LexUz_1438525..doc",
  //     id: 1,
  //   },

  //   {
  //     category_name: "LexUz_1438529..doc",
  //     id: 2,
  //   },

  //   {
  //     category_name: "LexUz_1449617..doc",
  //     id: 3,
  //   },

  //   {
  //     category_name: "LexUz_1452652..doc",
  //     id: 4,
  //   },

  //   {
  //     category_name: " LexUz_1452654(1)..doc",
  //     id: 5,
  //   },

  //   {
  //     category_name: "LexUz_1592419..doc",
  //     id: 6,
  //   },

  //   {
  //     category_name: " LexUz_1592421..doc",
  //     id: 7,
  //   },

  //   {
  //     category_name: "LexUz_1615245..doc",
  //     id: 8,
  //   },

  //   {
  //     category_name: " LexUz_1615247..doc",
  //     id: 9,
  //   },

  //   {
  //     category_name: "LexUz_2307198..doc",
  //     id: 10,
  //   },

  //   {
  //     category_name: " LexUz_2307200..doc",
  //     id: 11,
  //   },

  //   {
  //     category_name: " ПЛЕНУМ ВАЛЮТА УЗБЕКЧА..doc",
  //     id: 12,
  //   },

  //   {
  //     category_name: "ПЛЕНУМ ВАЛЮТА..doc",
  //     id: 13,
  //   },

  //   {
  //     category_name: " Пленум о приз дог недейст..doc",
  //     id: 14,
  //   },

  //   {
  //     category_name: "Пленум о суд актах..doc",
  //     id: 15,
  //   },

  //   {
  //     category_name: "Пленум_о_Касс_инстанции..doc",
  //     id: 16,
  //   },

  //   {
  //     category_name: "Пленум_о_применениdoc..doc",
  //     id: 17,
  //   },

  //   {
  //     category_name: " пленум 35 мошен..pdf",
  //     id: 18,
  //   },

  //   {
  //     category_name: "пленум укиш..doc",
  //     id: 19,
  //   },
  // ];

  return (
    <div className="bg-[#cccaca5d]">
      <div className="grid grid-cols-2 max-w-[1320px] mx-auto py-10 gap-10 justify-between">
        <div className="flex items-start bg-white p-8 rounded-[8px] gap-10">
          <img src={icons} alt="icons" className="w-[50px]" />
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
          <img src={icons} alt="icons" className="w-[50px]" />
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
