import { useParams } from "react-router-dom";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import useGetData from "../../api/api";
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { services } = useGetData();

  const service = services.find((s) => s.id === id);

  return (
    <div className="myContainer mt-60 min-h-full">
      <div className="flex lg:flex-row flex-col gap-10">
        {/* Sidebar */}
        <div className="lg:w-[30%] space-y-10">
          <ServiceSidebar />
          <PostSidebar />
        </div>

        {/* Main Content Area */}
        <div className="lg:w-[70%]">
          {service ? (
            <div className="">
              <img
                src={`https://test.uzloyal.uz/api/uploads/images/${service.image_src}`}
                alt={service.title_en}
                className="rounded-lg"
              />
              <h2 className="heading2 mt-8">{service.title_en}</h2>
              <p className="mt-4">{service.text_en}</p>
            </div>
          ) : (
            <p>{t("service_not_found.service_not_found")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
