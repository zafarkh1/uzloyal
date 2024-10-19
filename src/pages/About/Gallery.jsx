import { useTranslation } from "react-i18next";

function Gallery(props) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-center lg:my-10 my-4">
        <p className="heading5 text-[#cdb091]">{t("gallery.assistMessage")}</p>
        <h5 className="heading2 lg:my-3 my-1">{t("gallery.legalAreas")}</h5>
        <p className="w-24 h-[1px] mx-auto bg-[#cdb091] hidden md:inline-block"></p>
      </div>
      <div></div>
    </div>
  );
}

export default Gallery;
