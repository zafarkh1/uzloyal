import { useParams, useNavigate, Link } from "react-router-dom";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import useGetData from "../../api/api";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import { useLangStore } from "../../components/utils/zustand/useLangStore";
import { useTranslation } from "react-i18next";

const NewsDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { news } = useGetData();

  // translate language
  const { currentLanguage } = useLangStore();
  const getNewsDetailsLanguage = (item) => {
    if (currentLanguage === "uz") return item?.title_uz;
    if (currentLanguage === "ru") return item?.title_ru;
    if (currentLanguage === "cn") return item?.title_zh;
    if (currentLanguage === "tr") return item?.title_tr;
    return item?.title_en;
  };
  //

  const currentPostIndex = news.findIndex((post) => post.id === id);
  const currentPost = news[currentPostIndex];

  const prevPost = currentPostIndex > 0 ? news[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < news.length - 1 ? news[currentPostIndex + 1] : null;

  const handlePreviousClick = () => {
    if (prevPost) {
      navigate(`/newsdetails/${prevPost.id}`);
      window.scrollTo(0, 0);
    }
  };

  const handleNextClick = () => {
    if (nextPost) {
      navigate(`/newsdetails/${nextPost.id}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="lg:mt-48 sm:mt-32 mt-24 lg:mb-0 mb-10">
      {/* Background image */}
      <BackgroundofPages heading="News" text="Latest news" />

      <div className="myContainer flex lg:flex-row flex-col justify-between lg:gap-10 gap-4 w-full min-h-screen mt-8">
        {/* Main Content: 70% width on large screens */}
        <div className="lg:w-[70%]">
          {currentPost ? (
            <div>
              <div>
                <ul className="flex items-center justify-start text-gray-600 text">
                  <li className="flex items-center">
                    <span>{t("news.by")}</span>
                    <Link
                      to={`/newsdetails/${currentPost.id}`}
                      className="ml-1 hover:text-[#c3af41]"
                    >
                      {currentPost.author}
                    </Link>
                  </li>
                  <li className="flex items-center lg:ml-10 ml-2">
                    <span>{currentPost.created_at.slice(0, 10)}</span>
                  </li>
                </ul>
              </div>

              <h2 className="lg:my-4 my-2 heading2">
                {getNewsDetailsLanguage(currentPost)}
              </h2>

              <div className="lg:my-10 my-4">
                <img
                  src={`https://test.uzloyal.uz/api/uploads/images/${currentPost.news_images[0]["image.src"]}`}
                  alt={currentPost.title_en}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Previous and Next Post Navigation */}
              <div className="more-posts flex justify-between w-full mt-10 mb-10 text">
                {prevPost && (
                  <div className="previous-post border border-gray-300 p-4 flex flex-col">
                    <button
                      onClick={handlePreviousClick}
                      className="text-left text-lg text-gray-600 hover:text-[#c3af41] flex items-center"
                    >
                      <span className="mr-2">&#8592;</span>
                      <span className="font-medium">
                        {t("blogdetails.previous")}
                      </span>
                    </button>
                    <p>{prevPost.title_en}</p>
                  </div>
                )}

                {nextPost && (
                  <div className="next-post border border-gray-300 p-4 flex flex-col text-right">
                    <button
                      onClick={handleNextClick}
                      className="text-right text-lg text-gray-600 hover:text-[#c3af41] flex items-center justify-end"
                    >
                      <span className="font-medium">
                        {t("blogdetails.next")}
                      </span>
                      <span className="ml-2">&#8594;</span>
                    </button>
                    <p>{nextPost.title_en}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                {t("blogdetails.notfound")}
              </h2>
              <p className="mt-4 text-gray-600">
                {t("blogdetails.notfound_message")}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar: 30% width on large screens */}
        <div className="lg:w-[30%] space-y-10">
          <ServiceSidebar />
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
