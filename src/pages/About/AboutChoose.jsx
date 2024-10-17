import { useTranslation } from "react-i18next";

function AboutChoose() {
  const { t } = useTranslation();

  return (
    <div className="lg:mb-20 mb-10">
      <div className="text-center">
        <p className="heading5 text-[#cdb091]">{t("about.heading")}</p>
        <h5 className="heading2 lg:my-3 my-1">{t("about.subheading")}</h5>
        <p className="w-24 h-[1px] mx-auto bg-[#cdb091] hidden lg:inline-block"></p>
      </div>
      <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-4 lg:my-10 my-4">
        <div className="lg:w-1/2 lg:-order-1 order-2">
          <h2 className="lg:text-4xl font-semibold lg:leading-normal">
            {t("about.title")}
          </h2>
          <p className="lg:text-xl lg:leading-10 lg:mt-10 mt-4">
            {t("about.description")}
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/assets/about-1.jpg"
            alt="about"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutChoose;
