import { useTranslation } from "react-i18next";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { getCaseStudies } from "../../api/caseStudies";

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

const privacy = [
  {
    id: 1,
    title: "Privace & Policy",
    link: "/",
  },
  {
    id: 2,
    title: "About us",
    link: "/",
  },
  {
    id: 3,
    title: "Terms",
    link: "/",
  },
  {
    id: 4,
    title: "FAQ",
    link: "/",
  },
];

function Footer(props) {
  const { t } = useTranslation();

  const navs = [
    { id: 1, title: t("topnavbarlink.title1"), link: "/" },
    { id: 2, title: t("topnavbarlink.title2"), link: "/about" },
    { id: 3, title: t("topnavbarlink.title3"), link: "/contact" },
    { id: 4, title: t("topnavbarlink.title4"), link: "/blogs" },
    { id: 5, title: t("bottomnavbar.title1"), link: "/news" },
    { id: 6, title: t("bottomnavbar.title3"), link: "/services" },
    { id: 7, title: t("bottomnavbar.title4"), link: "/resources" },
  ];

  return (
    <div className="bg-primary lg:pt-16 sm:pt-12 pt-8">
      <div className="myContainer text-white">
        <div className="grid sm:grid-cols-3 grid-cols-2 lg:gap-10 gap-4 justify-center border-b border-fontColor lg:pb-10 pb-4">
          {/*    About us */}
          <div className="flex flex-col lg:gap-6 gap-3 lg:col-span-1 col-span-3 sm:text-left text-center">
            <h2 className="heading2">UzLoyal</h2>
            <p className="lg:w-60">{t("footer.description")}</p>
            <div className="flex gap-4 sm:justify-start justify-center">
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

          {/*    Quick links */}
          <div className="lg:col-span-1 col-span-1">
            <h5 className="heading5">Quick Links</h5>
            <ul className="space-y-2 lg:mt-6 mt-3">
              {navs.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/*    Services */}
          <div className="lg:col-span-1 col-span-1">
            <h5 className="heading5">Services</h5>
            <ul className="space-y-2 lg:mt-6 mt-3">
              {getCaseStudies.map((study, index) => (
                <li key={study.id}>
                  <a href={`/case-studies/${study.id}`}>{study.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*    Copyright */}
        <div className="flex md:flex-row flex-col justify-between items-center lg:mt-6 mt-3">
          <p className="text">
            Copyright © 2023 Loyal.uz. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {privacy.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="text">
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

export default Footer;
