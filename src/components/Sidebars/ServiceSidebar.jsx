import { useNavigate } from "react-router-dom";
import useGetData from "../../api/api";
import { useLangStore } from "../utils/zustand/useLangStore";
import { useTranslation } from "react-i18next";

const ServiceSidebar = () => {
  const navigate = useNavigate();
  const { services } = useGetData();
  const { t } = useTranslation();

  // translate language
  const { currentLanguage } = useLangStore();
  const getServiceSidebar = (item) => {
    if (currentLanguage === "uz") return item?.title_uz;
    if (currentLanguage === "ru") return item?.title_ru;
    if (currentLanguage === "cn") return item?.title_zh;
    if (currentLanguage === "tr") return item?.title_tr;
    return item?.title_en;
  };
  //

  return (
    <div className="bg-gray-100 lg:p-8 sm:p-6 p-4 rounded-lg shadow-md">
      {/* Blog sidebar container */}
      <div className="widget category-widget">
        <h3 className="heading5 sm:mb-6 mb-3">{t("services.services")}</h3>
        <ul className="space-y-3">
          {/* List of services */}
          {services.slice(0, 9).map((service) => (
            <li
              key={service.id}
              className="hover:bg-[#cdb091] hover:text-white cursor-pointer bg-white sm:p-4 p-2 text rounded-lg"
              onClick={() => {
                navigate(`/servicedetails/${service.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <span className="mr-2">&gt;&gt;</span>
              {getServiceSidebar(service)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebar;
