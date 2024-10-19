import { useTranslation } from "react-i18next";
import Slider from "react-slick";

var settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  dots: true,
};

function AboutSlider(props) {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      text: t("silider.text"),
      img: "/assets/services/service2.png",
      name: "Joe Hart",
      status: t("silider.status"),
    },
    {
      id: 2,
      text: t("silider.text2"),
      img: "/assets/services/service3.jpeg",
      name: "Emily Clark",
      status: t("silider.status2"),
    },
    {
      id: 3,
      text: t("silider.text3"),
      img: "/assets/services/service4.jpeg",
      name: "Daniel Turner",
      status: t("silider.status3"),
    },
  ];

  return (
    <div className="lg:flex mt-20">
      <div className="lg:w-1/2 bg-[#172533] text-white">
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id}
              className="lg:p-14 p-10 text-center lg:space-y-4 space-y-2"
            >
              <p className="lg:text-xl lg:leading-10">{item.text}</p>
              <div className="flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <h5 className="heading5">{item.name}</h5>
              <p>{item.status}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:w-1/2">
        <img
          src="/assets/services/service1.jpeg"
          alt="about"
          className="h-full object-cover w-full"
        />
      </div>
    </div>
  );
}

export default AboutSlider;
