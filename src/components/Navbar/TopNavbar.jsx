import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";
import { useLangStore } from "../utils/zustand/useLangStore";

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

const languages = [
  { id: 1, title: "en", icon: "fi fi-gb" },
  { id: 2, title: "uz", icon: "fi fi-uz" },
  { id: 3, title: "ru", icon: "fi fi-ru" },
  { id: 4, title: "tr", icon: "fi fi-tr" },
  { id: 5, title: "cn", icon: "fi fi-cn" },
];

function TopNavbar({ navs }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { setCurrentLanguage } = useLangStore();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div className="bg-white">
      <div className="myContainer flex items-center gap-10">
        {/*    Logo     */}
        <div>
          <a href="/">
            <img src="/assets/logo.png" alt="logo" className="w-24" />
          </a>
        </div>

        {/*     Navigation     */}
        <div className="w-full">
          <div className="flex items-center justify-between">
            {/*       Icons     */}
            <div className="hidden lg:flex items-center gap-4 text-primary">
              {icons.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ))}
              <a href="tel:+998901234567">+998901234567</a>
            </div>

            {/*       Time     */}
            <div className="hidden lg:block">
              <p className="text-primary text-sm">{t("topnavbar.hours")}</p>
            </div>

            {/*       Languages     */}
            <div className="flex gap-2">
              {languages.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLanguageChange(item.title)}
                >
                  <span className={item.icon}></span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 hidden lg:flex items-center gap-10">
            <button
              className="bg-primary hover:bg-primary-hover text-white px-4 py-1 rounded-lg cursor-pointer"
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              {t("topnavbar.consultation")}
            </button>

            {/*       Nav Links */}
            <ul className="flex items-center justify-between w-1/2">
              {navs.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="text-fontColor font-bold">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
