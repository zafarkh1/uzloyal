import { useNavigate } from "react-router-dom";
import useGetData from "../../api/api";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";

const Blogs = () => {
  const navigate = useNavigate();
  const { blogs } = useGetData();

  return (
    <div className="lg:mt-48 sm:mt-32 mt-24">
      {/*     Background image    */}
      <BackgroundofPages
        heading={"Latest Articles"}
        text={"Our publications"}
      />

      {/*                 Blog Page Content    */}
      <div className="myContainer flex lg:flex-row flex-col justify-between lg:gap-10 gap-4 w-full min-h-screen lg:mt-10 mt-4 mb-8">
        {/*     Main Content Area: 70% width */}
        <div className="lg:w-[70%]">
          {blogs.map((post) => (
            <div className="lg:mb-14 sm:mb-10 mb-4" key={post.id}>
              <img
                src={`https://test.uzloyal.uz/api/uploads/images/${post.blog_images[0]["image.src"]}`}
                alt={post.title_en}
                className="w-full rounded-lg lg:mb-6 mb-3 object-cover"
              />
              <ul className="flex text text-gray-500">
                <li
                  onClick={() => {
                    navigate(`/blogdetails/${post.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  By
                  <span className="text-blue-500 hover:underline ml-1 cursor-pointer">
                    {post.author}
                  </span>
                </li>
                <li className="ml-4">{post.created_at.slice(0, 10)}</li>
              </ul>
              <h3 className="heading5 lg:my-4 my-2">{post.title_en}</h3>
              <span
                onClick={() => {
                  navigate(`/blogdetails/${post.id}`);
                  window.scrollTo(0, 0);
                }}
                className="text text-gray-400 hover:text-secondary cursor-pointer"
              >
                Read more ...
              </span>
            </div>
          ))}
        </div>

        {/* Sidebar Area: 30% width */}
        <div className="lg:w-[30%] space-y-10">
          <ServiceSidebar />
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
