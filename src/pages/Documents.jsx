import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { BackgroundofPages } from "../components/utils/backgoundOfPages";
import { useTranslation } from "react-i18next";

function Documents(props) {
  const { t } = useTranslation();
  const arizalar = [
    {
      category_name: t("documents.category_name1"),
      category_id: 12,
    },
    {
      category_name: t("documents.category_name2"),
      category_id: 10,
    },
    {
      category_name: t("documents.category_name3"),
      category_id: 9,
    },
    {
      category_name: t("documents.category_name4"),
      category_id: 11,
    },
  ];

  const shartnomalar = [
    {
      category_name: t("documents.shartnomalar1"),
      category_id: 14,
    },
    {
      category_name: t("documents.shartnomalar2"),
      category_id: 15,
    },
    {
      category_name: t("documents.shartnomalar3"),
      category_id: 16,
    },
  ];

  const talabnoma = [
    {
      category_name: t("documents.talabnoma"),
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
                  {t("applications")}
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
                  {t("contracts")}
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
                  {t("contracts")}
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
