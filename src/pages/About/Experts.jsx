import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

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
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: t("experts.name"),
      service: t("experts.service"),
      img: "/assets/services/service19.jpeg",
    },
    {
      id: 2,
      name: t("experts.name1"),
      service: t("experts.service1"),
      img: "/assets/services/service18.jpeg",
    },
    {
      id: 3,
      name: t("experts.name2"),
      service: t("experts.service2"),
      img: "/assets/services/service17.jpeg",
    },
    {
      id: 4,
      name: t("experts.name3"),
      service: t("experts.service3"),
      img: "/assets/services/service16.jpeg",
    },
  ];

  return (
    <div className="lg:my-10 my-4">
      <div className="text-center lg:my-10 my-6">
        <p className="heading5 text-[#cdb091]">
          {t("experts.qualified_attorneys")}
        </p>
        <h5 className="heading2 lg:my-3 my-1">
          {t("experts.meet_our_experts")}
        </h5>
        <p className="w-24 h-[1px] mx-auto bg-[#cdb091] hidden md:inline-block"></p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 text-white">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-cover bg-no-repeat xl:h-96 md:h-72 h-40 md:mt-auto md:pb-0 pb-4 flex flex-col justify-end items-center gap-2 group rounded-lg"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(${item.img})`,
            }}
          >
            <div className="lg:group-hover:-translate-y-28 md:group-hover:-translate-y-16 transition-all duration-500 text-center lg:space-y-3 space-y-1">
              <h5 className="heading3">{item.name}</h5>
              <p className="text-[#cdb091] text">{item.service}</p>
              <div className="flex items-center justify-center gap-3 md:translate-y-5 md:group-hover:translate-y-0 md:mt-4 transition-all duration-500">
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
