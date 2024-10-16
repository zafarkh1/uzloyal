import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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

function TopNavbar({ navs }) {
  return (
    <div className="myContainer flex items-center gap-10 bg-white">
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
              <a key={item.id} href={item.link}>
                {item.icon}
              </a>
            ))}
            <a href="tel:+998901234567">+998901234567</a>
          </div>

          {/*       Time     */}
          <div className="hidden lg:block">
            <p className="text-primary text-sm">
              Mon-Fri from 09:00 to 18:00 Tashkent
            </p>
          </div>

          {/*       Languages     */}
          <div className="flex gap-2">
            <span className="fi fi-uz"></span>
            <span className="fi fi-gb"></span>
            <span className="fi fi-cn"></span>
            <span className="fi fi-ru"></span>
            <span className="fi fi-tr"></span>
          </div>
        </div>

        <div className="mt-4 hidden lg:flex items-center gap-10">
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-1 rounded-lg cursor-pointer">
            Get consultation
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
  );
}

export default TopNavbar;
