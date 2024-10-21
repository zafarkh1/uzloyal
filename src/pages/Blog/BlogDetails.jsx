import { useParams, useNavigate, Link } from "react-router-dom";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import useGetData from "../../api/api";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useGetData();
  const { t } = useTranslation();

  const currentPostIndex = blogs.findIndex((post) => post.id === id);
  const currentPost = blogs[currentPostIndex];

  const prevPost = currentPostIndex > 0 ? blogs[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < blogs.length - 1 ? blogs[currentPostIndex + 1] : null;

  const handlePreviousClick = () => {
    if (prevPost) {
      navigate(`/blogdetails/${prevPost.id}`);
      window.scrollTo(0, 0);
    }
  };

  const handleNextClick = () => {
    if (nextPost) {
      navigate(`/blogdetails/${nextPost.id}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="mt-52">
      {/*     Background image    */}
      <BackgroundofPages heading="Latest" Articles text="Our publications" />

      <div className="myContainer flex lg:flex-row flex-col justify-between lg:gap-10 gap-4 w-full min-h-screen mt-8">
        {/* Main Content: 70% width on large screens */}
        <div className="lg:w-[70%]">
          {currentPost ? (
            <div>
              <div>
                <ul className="flex items-center justify-start text-gray-600">
                  <li className="flex items-center">
                    <span>By </span>
                    <Link
                      to={`/blogdetails/${currentPost.id}`}
                      className="ml-1 hover:text-[#c3af41]"
                    >
                      {currentPost.author}
                    </Link>
                  </li>
                  <li className="flex items-center ml-10">
                    <span>{currentPost.created_at.slice(0, 10)}</span>
                  </li>
                </ul>
              </div>

              <h2 className="mt-4 mb-6 heading2">{currentPost.title_en}</h2>

              <div className="my-10">
                <img
                  src={`https://test.uzloyal.uz/api/uploads/images/${currentPost.blog_images[0]["image.src"]}`}
                  alt={currentPost.title_en}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Previous and Next Post Navigation */}
              <div className="more-posts flex justify-between w-full mt-10 mb-10">
                {prevPost && (
                  <div className="previous-post border border-gray-300 p-4 flex flex-col">
                    <button
                      onClick={handlePreviousClick}
                      className="text-left text-lg text-gray-600 hover:text-[#c3af41] flex items-center mb-2"
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
                      className="text-right text-lg text-gray-600 hover:text-[#c3af41] flex items-center justify-end mb-2"
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

export default BlogDetails;
