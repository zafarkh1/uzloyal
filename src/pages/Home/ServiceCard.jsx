import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGetData from "./../../api/api";

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

  return (
    <div className="">
      <Slider {...settings}>
        {services.map((item) => (
          <div key={item.id} className="p-3">
            <div
              className="bg-cover bg-center h-64 flex items-center justify-center text-white rounded-md px-10"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('https://test.uzloyal.uz/api/uploads/images/${item.image_src}')`,
              }}
            >
              <h5 className="heading5">{item.title_en}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ServiceCard;
