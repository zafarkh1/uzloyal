import Slider from "react-slick";
import useGetData from "./../../api/api";

var settings = {
  //   dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
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
  console.log(services);
  return (
    <div className="">
      <Slider {...settings}>
        {services.map((item) => (
          <div key={item.id} className="px-3">
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
