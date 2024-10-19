import useGetData from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useLangStore } from "../../components/utils/zustand/useLangStore";
import { useTranslation } from "react-i18next";

function Article(props) {
  const { blogs } = useGetData();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // translate language
  const { currentLanguage } = useLangStore();
  const getArticleLanguage = (item) => {
    if (currentLanguage === "uz") return item?.title_uz;
    if (currentLanguage === "ru") return item?.title_ru;
    if (currentLanguage === "cn") return item?.title_zh;
    if (currentLanguage === "tr") return item?.title_tr;
    return item?.title_en;
  };
  //

  return (
    <div className="text-center lg:my-16 my-10">
      <p className="heading5 text-[#cdb091]">{t("article.articles")}</p>
      <h5 className="heading2 lg:my-3 my-1">{t("article.latest_update")}</h5>
      <p className="w-24 h-[1px] mx-auto bg-[#cdb091] hidden lg:inline-block"></p>
      <div className="grid lg:grid-cols-3 lg:gap-6 gap-4 lg:mt-10 mt-6">
        {blogs.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start lg:gap-4 gap-2"
          >
            <img
              src={`https://test.uzloyal.uz/api/uploads/images/${item.blog_images[0]["image.src"]}`}
              alt="img"
              className="w-full object-cover h-56 rounded-lg"
            />
            <p className="text-[#c4c4c4]">
              <span>{getArticleLanguage(item).slice(0, 10)}</span>
              <span className="ml-6">{getArticleLanguage(item)}</span>
            </p>
            <p className="text-left heading5">{getArticleLanguage(item)}</p>
            <div className="flex items-center">
              <p className="w-8 h-[2px] bg-primary"></p>
              <p
                className="text-primary ml-4 cursor-pointer"
                onClick={() => {
                  navigate(`/blogdetails/${item.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                {t("blogs.readmore")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
