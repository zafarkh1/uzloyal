import { useParams } from "react-router-dom";
import useGetData from "../../api/api";
import { useTranslation } from "react-i18next";
import { BackgroundofPages } from "../utils/backgoundOfPages";
import { DocsIcon } from "../utils/icons";

const Category = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { sources } = useGetData();

  const findDocuments = sources.filter((item) => item.category_id === +id);

  return (
    <div className="lg:mt-48 sm:mt-32 mt-24 lg:mb-0 mb-10">
      <BackgroundofPages heading="Latest" Articles text="Our publications" />

      <div className="myContainer">
        <h1 className="heading5 text-[#1e2e3e]">
          {t("category.civilDisputesApplications")}
        </h1>
        <div className="lg:my-10 my-5">
          {findDocuments.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 lg:mb-5 mb-3 items-center text"
            >
              <DocsIcon />
              <a
                download
                href={`https://test.uzloyal.uz/api/uploads/images/${item.src}`}
              >
                {item.category_name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
