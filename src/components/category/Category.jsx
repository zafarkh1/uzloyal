import { useParams } from "react-router-dom";
import useGetData from "../../api/api";
import { DocsIcon } from "../../assets/icons";
import { useLangStore } from "../utils/zustand/useLangStore";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { sources } = useGetData();

  //
  const { currentLanguage } = useLangStore();
  const getCategory = (item) => {
    if (currentLanguage === "uz") return item?.title_uz;
    if (currentLanguage === "ru") return item?.title_ru;
    if (currentLanguage === "cn") return item?.title_zh;
    if (currentLanguage === "tr") return item?.title_tr;
    return item?.title_en;
  };
  //

  const findDocuments = sources.filter((item) => item.category_id === +id);

  return (
    <div className="max-w-[1320px] mx-auto py-10">
      <h1 className="text-[19px] text-[#1e2e3e] mt-[200px] mb-3">
        {t("category.civilDisputesApplications")}
      </h1>
      {findDocuments.map((item) => (
        <div key={item.id} className="flex gap-3 items-center px-4 py-2">
          <DocsIcon />
          <a
            download
            href={`https://test.uzloyal.uz/api/uploads/images/${item.src}`}
          >
            {getCategory(item)}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Category;
