import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Cody Fisher",
    service: "Criminal Defense",
    img: "/assets/services/service19.jpeg",
  },
  {
    id: 2,
    name: "Jane Doe",
    service: "Criminal Defense",
    img: "/assets/services/service18.jpeg",
  },
  {
    id: 3,
    name: "John Smith",
    service: "Criminal Defense",
    img: "/assets/services/service17.jpeg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    service: "Criminal Defense",
    img: "/assets/services/service16.jpeg",
  },
];

const icons = [
  {
    id: 1,
    icon: <FaTelegram className="text-xl" />,
    link: "https://telegram.org/",
  },
  {
    id: 2,
    icon: <FaFacebook className="text-xl" />,
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: <FaInstagram className="text-xl" />,
    link: "https://www.instagram.com/",
  },
];

function Experts(props) {
  return (
    <div className="my-10">
      <div className="text-center my-10">
        <p className="heading5 text-[#cdb091]">Qualified Attorneys</p>
        <h5 className="heading2 my-3">Meet Our Experts</h5>
        <p className="w-24 h-[1px] mx-auto bg-[#cdb091]"></p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 text-white">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-cover bg-no-repeat lg:h-96 mt-auto flex flex-col justify-end items-center gap-2 group rounded-lg"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(${item.img})`,
            }}
          >
            <div className="group-hover:-translate-y-28 transition-all duration-500 text-center space-y-3">
              <h5 className="heading3">{item.name}</h5>
              <p className="text-[#cdb091]">{item.service}</p>
              <div className="flex items-center justify-center gap-3 translate-y-5 group-hover:translate-y-0 mt-4 transition-all duration-500">
                {icons.map((icon) => (
                  <a
                    key={icon.id}
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experts;
