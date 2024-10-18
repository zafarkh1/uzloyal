import { useNavigate } from "react-router-dom";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import useGetData from "../../api/api";
import { useLangStore } from "../../components/utils/zustand/useLangStore";

const News = () => {
  const navigate = useNavigate();
  const news = useGetData();
  const { currentLanguage } = useLangStore();

  const getAuthorName = (item) => {
    if (currentLanguage === "uz") return item?.title_uz;
    if (currentLanguage === "ru") return item?.title_ru;
    if (currentLanguage === "cn") return item?.title_zh;
    if (currentLanguage === "tr") return item?.title_tr;
    return item?.author_en;
  };

  return (
    <div className="lg:mt-48 sm:mt-32 mt-24">
      <BackgroundofPages heading={"Latest News"} text={"News"} />
      <div className="myContainer flex lg:flex-row flex-col lg:gap-10 gap-4 min-h-screen lg:mt-10 mt-4">
        {/* Sidebar */}
        <div className="lg:w-[30%] order-2 space-y-10 lg:mb-0 mb-10">
          <ServiceSidebar />
          <PostSidebar />
        </div>

        {/* Main Content Area */}
        <div className="lg:w-[70%]">
          {news.news.map((post) => (
            <div className="lg:mb-14 mb-8" key={post.id}>
              <img
                src={`https://test.uzloyal.uz/api/uploads/images/${post.news_images[0]["image.src"]}`}
                alt={post.title_en}
                className="w-full rounded-lg lg:mb-6 mb-2 object-cover"
              />
              <ul className="flex gap-4 text">
                <li>
                  By{" "}
                  <span
                    className="text-secondary cursor-pointer"
                    onClick={() => {
                      navigate(`/newsdetails/${post.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {post.author}
                  </span>
                </li>
                <li>{post.created_at.slice(0, 10)}</li>
              </ul>
              <h3 className="heading5 lg:my-4 my-2">{getAuthorName(post)}</h3>
              <h5
                className="text hover:text-secondary transition-colors duration-200"
                onClick={() => {
                  navigate(`/newsdetails/${post.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                ЧИТАТЬ ДАЛЕЕ...
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
