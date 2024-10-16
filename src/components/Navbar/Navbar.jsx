import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

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
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    title: "Our publictioons",
    link: "/blogs",
  },
];

function Navbar(props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopNavbar navs={navs} />
      <BottomNavbar navs={navs} />
    </div>
  );
}

export default Navbar;
