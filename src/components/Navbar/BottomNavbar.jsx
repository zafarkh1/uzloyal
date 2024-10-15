import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const botNavs = [
  { id: 5, title: "News", link: "/news" },
  { id: 6, title: "Legal library", link: "/library" },
  { id: 7, title: "Services", link: "/services" },
  { id: 8, title: "Document samples", link: "/resources" },
];

function BottomNavbar({ navs }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-primary text-white lg:pl-36 pl-0">
      <div className="myContainer">
        {/* Mobile menu toggle button */}
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          <MdMenu />
        </button>

        {/* Sidebar/Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-primary text-white w-64 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0 lg:static lg:w-full lg:h-auto lg:flex z-40`}
        >
          <ul
            className={`flex lg:flex-row flex-col lg:justify-between lg:items-center lg:w-full w-64 space-y-4 lg:space-y-0 mt-24 lg:mt-0 lg:pl-0 pl-10`}
          >
            {/* Mobile-only nav items */}
            {navs.map((item) => (
              <li key={item.id} className="lg:hidden">
                <a href={item.link} className="lg:text-xl">
                  {item.title}
                </a>
              </li>
            ))}

            {/* Main nav items */}
            {botNavs.map((item) => (
              <li key={item.id} className="lg:mx-4">
                <a href={item.link} className="lg:text-xl">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Close button for mobile view */}
          <button
            className="lg:hidden absolute top-10 right-4 text-2xl"
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
