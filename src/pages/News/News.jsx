import { useNavigate } from "react-router-dom";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import useGetData from "../../api/api";

const News = () => {
  const news = useGetData();
  const navigate = useNavigate();

  return (
    <div className="mt-52">
      <BackgroundofPages heading={"Latest News"} text={"News"} />
      <div className="myContainer flex lg:flex-row flex-col gap-10 min-h-screen mt-10">
        {/* Sidebar */}
        <div className="lg:w-[30%]">
          <ServiceSidebar />
          <PostSidebar />
        </div>

        {/* Main Content Area */}
        <div className="lg:w-[70%]">
          {news.news.map((post) => (
            <div className="lg:mb-14 mb-10" key={post.id}>
              <img
                src={`https://test.uzloyal.uz/api/uploads/images/${post.news_images[0]["image.src"]}`}
                alt={post.title_en}
                className="w-full rounded-lg mb-6 object-cover"
              />
              <ul className="flex gap-4">
                <li>
                  By{" "}
                  <span
                    className="text-secondary cursor-pointer"
                    onClick={() => navigate(`/newsdetails/${post.id}`)}
                  >
                    {post.author}
                  </span>
                </li>
                <li>{post.created_at.slice(0, 10)}</li>
              </ul>
              <h3 className="text-2xl font-bold my-4">{post.title_en}</h3>
              <h5
                className="lg:text-lg hover:text-secondary transition-colors duration-200"
                onClick={() => navigate(`/newsdetails/${post.id}`)}
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
