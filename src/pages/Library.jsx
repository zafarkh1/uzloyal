import { GoArrowRight } from "react-icons/go";
import useGetData from "../api/api";
import { BackgroundofPages } from "../components/utils/backgoundOfPages";
import { useTranslation } from "react-i18next";
import { useLangStore } from "../components/utils/zustand/useLangStore";

function Library() {
  const { sources } = useGetData();
  const { t } = useTranslation();

  const { currentLanguage } = useLangStore();
  const getLibrary = (item) => {
    if (currentLanguage === "uz") return item?.title_uz;
    if (currentLanguage === "ru") return item?.title_ru;
    if (currentLanguage === "cn") return item?.title_zh;
    if (currentLanguage === "tr") return item?.title_tr;
    return item?.title_en;
  };
  getLibrary();

  return (
    <div className="lg:mt-48 sm:mt-32 mt-24">
      <BackgroundofPages heading={"Legal Library"} text={"Library"} />
      <div className="bg-[#cccaca5d]">
        <div className="myContainer">
          <div className="grid lg:grid-cols-2 lg:py-10 py-6 gap-10">
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
                  {t("laws")}
                </h1>
                {sources?.slice(0, 3).map((value, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <GoArrowRight className="text" />
                    <a
                      download
                      href={`https://test.uzloyal.uz/api/uploads/images/${value.src}`}
                      className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                    >
                      {value.category_name}
                      {/* getLibrary */}
                    </a>
                  </div>
                ))}
              </div>
            </div>

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
                  {t("supreme_court_resolutions")}
                </h1>
                {sources?.slice(3, 22).map((value, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <GoArrowRight className="text-[20px]" />
                    <a
                      download
                      href={`https://test.uzloyal.uz/api/uploads/images/${value.src}`}
                      className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                    >
                      {value.category_name}
                      {/* getLibrary */}
                    </a>
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

export default Library;
