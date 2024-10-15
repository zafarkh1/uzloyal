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
    link: "/posts",
  },
];

function Navbar(props) {
  return (
    <>
      <TopNavbar navs={navs} />
      <BottomNavbar navs={navs} />
    </>
  );
}

export default Navbar;
