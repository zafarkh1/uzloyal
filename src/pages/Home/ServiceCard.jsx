import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGetData from "../../api/api";
import { useNavigate } from "react-router-dom";

export const PreviousArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 bg-white border border-gray-500 lg:p-2 rounded-full"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <IoIosArrowBack className="text-gray-500 icon" />
  </button>
);

export const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 bg-white border border-gray-500 lg:p-2 rounded-full"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <IoIosArrowForward className="text-gray-500 icon" />
  </button>
);

var settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  prevArrow: <PreviousArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

function ServiceCard(props) {
  const { services } = useGetData();
  const navigate = useNavigate();

  return (
    <div>
      <Slider {...settings}>
        {services.map((service) => (
          <div
            key={service.id}
            className="lg:p-3 p-1 cursor-pointer"
            onClick={() => {
              navigate(`/servicedetails/${service.id}`);
              window.scrollTo(0, 0);
            }}
          >
            <div
              className="bg-cover bg-center lg:h-64 sm:h-48 h-40 object-cover flex items-center justify-center text-white rounded-md lg:px-10 px-4 text-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('https://test.uzloyal.uz/api/uploads/images/${service.image_src}')`,
              }}
            >
              <h5 className="lg:text-2xl sm:text-base text-sm">
                {service.title_en}
              </h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ServiceCard;
