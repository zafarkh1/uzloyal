import { useNavigate } from "react-router-dom";
import useGetData from "../../api/api";

function Cards(props) {
  const { services } = useGetData();
  const navigate = useNavigate();
  console.log(services);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-10">
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
              onClick={() => navigate(`/servicedetails/${service.id}`)}
            >
              {service.title_en}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
