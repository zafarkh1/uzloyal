import { useTranslation } from "react-i18next";

export const BackgroundofPages = ({ heading, text }) => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-cover bg-no-repeat bg-center lg:h-80 h-48 flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/assets/page-bg.jpg)",
      }}
    >
      <div className="myContainer text-white">
        <h2 className="heading2 mb-8">{t("about.title1")}</h2>

        <h5 className="heading5">
          {t("about.title3")} -
          <span className="text-blue-400">{t("about.title2")}</span>
        </h5>
      </div>
    </div>
  );
};
