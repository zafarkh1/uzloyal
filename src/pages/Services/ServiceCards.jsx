import { useNavigate } from "react-router-dom";
import useGetData from "../../api/api";
import { useLangStore } from "../../components/utils/zustand/useLangStore";

function Cards(props) {
  const { services } = useGetData();

  //
  const { currentLanguage } = useLangStore();
  const getServicesCards = (item) => {
    if (currentLanguage === "uz") return item?.title_uz;
    if (currentLanguage === "ru") return item?.title_ru;
    if (currentLanguage === "cn") return item?.title_zh;
    if (currentLanguage === "tr") return item?.title_tr;
    return item?.title_en;
  };
  //

  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
      {services.slice(0, 6).map((service) => (
        <div
          key={service.id}
          className="flex flex-col bg-white rounded-lg shadow-2xl"
        >
          <div className="flex flex-col items-center p-4">
            <img
              src={`https://test.uzloyal.uz/api/uploads/images/${service.image_src}`}
              alt={service.title_en}
              style={{
                height: "220px",
                width: "90%",
                objectFit: "cover",
                marginTop: "10px",
              }}
            />
            <h5
              className="heading5 hover:text-secondary cursor-pointer text-center pt-4"
              onClick={() => {
                navigate(`/servicedetails/${service.id}`);
                window.scrollTo(0, 0);
              }}
            >
              {getServicesCards(service)}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
