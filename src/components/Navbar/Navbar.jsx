import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import { useTranslation } from "react-i18next";

function Navbar(props) {
  const { t } = useTranslation();

  const navs = [
    {
      id: 1,
      title: t("topnavbarlink.title1"),
      link: "/",
    },
    {
      id: 2,
      title: t("topnavbarlink.title2"),
      link: "/about",
    },
    {
      id: 3,
      title: t("topnavbarlink.title3"),
      link: "/contact",
    },
    {
      id: 4,
      title: t("topnavbarlink.title4"),
      link: "/blogs",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopNavbar navs={navs} />
      <BottomNavbar navs={navs} />
    </div>
  );
}

export default Navbar;
