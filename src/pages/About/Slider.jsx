import Slider from "react-slick";

const data = [
  {
    id: 1,
    text: "Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.",
    img: "/assets/services/service2.png",
    name: "Joe Hart",
    status: "CEO of MC",
  },
  {
    id: 2,
    text: "Vestibulum quisque vel diam, cursus neque. Pellentesque at ornare magna, nec commodo arcu. Amet consequat eget posuere arcu mi turpis convallis id ut.",
    img: "/assets/services/service3.jpeg",
    name: "Emily Clark",
    status: "CTO of SoftTech",
  },
  {
    id: 3,
    text: "Ultrices urna tellus vulputate scelerisque nulla. Quis est sit arcu maecenas, diam elementum convallis dictum euismod. Blandit congue nisl proin ac commodo.",
    img: "/assets/services/service4.jpeg",
    name: "Daniel Turner",
    status: "Lead Designer at CreArt",
  },
];

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
