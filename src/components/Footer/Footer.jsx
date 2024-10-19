import { useTranslation } from "react-i18next";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";

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

const navs = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About us",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Our publictioons",
    link: "/blog",
  },
  {
    id: 5,
    title: "News",
    link: "/news",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 7,
    title: "Document samples",
    link: "/resources",
  },
];

const services = [
  {
    id: 1,
    title: "q",
    link: "/",
  },
  {
    id: 2,
    title: "w",
    link: "/about",
  },
  {
    id: 3,
    title: "e",
    link: "/services",
  },
  {
    id: 4,
    title: "r",
    link: "/blog",
  },
  {
    id: 5,
    title: "t",
    link: "/news",
  },
];

const privacy = [
  {
    id: 1,
    title: "Privace & Policy",
    link: "/",
  },
  {
    id: 2,
    title: "About us",
    link: "/about",
  },
  {
    id: 3,
    title: "Terms",
    link: "/services",
  },
  {
    id: 4,
    title: "FAQ",
    link: "/news",
  },
];

function Footer(props) {
  const { t } = useTranslation();
  return (
    <div className="bg-primary pt-16">
      <div className="myContainer text-white">
        <div className="flex md:flex-row flex-col justify-between border-b border-fontColor pb-10">
          <div className="flex flex-col gap-6">
            <h2 className="heading2">UzLoyal</h2>
            <p className="w-60">{t("footer.description")}</p>
            <div className="flex gap-4">
              {icons.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="bg-fontColor w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="heading5">Quick Links</h5>
            <ul className="space-y-2 mt-6">
              {navs.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="heading5">Services</h5>
            <ul className="space-y-2 mt-6">
              {services.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p>Copyright © 2023 Loyal.uz. All rights reserved.</p>
          <ul className="flex gap-4">
            {privacy.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
