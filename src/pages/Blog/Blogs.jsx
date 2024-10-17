import { useNavigate } from "react-router-dom";
import useGetData from "../../api/api";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";

const Blogs = () => {
  const navigate = useNavigate();
  const { blogs } = useGetData();

  return (
    <div className="mt-52">
      {/*     Background image    */}
      <BackgroundofPages
        heading={"Latest Articles"}
        text={"Our publications"}
      />

      {/*                 Blog Page Content    */}
      <div className="myContainer flex lg:flex-row flex-col justify-between lg:gap-10 gap-4 w-full min-h-screen mt-12">
        {/*     Main Content Area: 70% width */}
        <div className="lg:w-[70%]">
          {blogs.map((post) => (
            <div className="lg:mb-14 mb-10" key={post.id}>
              <img
                src={`https://test.uzloyal.uz/api/uploads/images/${post.blog_images[0]["image.src"]}`}
                alt={post.title_en}
                className="w-full rounded-lg mb-6 object-cover"
              />
              <ul className="flex text-sm text-gray-500">
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
              <h3 className="text-2xl font-bold my-4">{post.title_en}</h3>
              <span
                onClick={() => {
                  navigate(`/blogdetails/${post.id}`);
                  window.scrollTo(0, 0);
                }}
                className="text-lg text-gray-400 hover:text-secondary cursor-pointer"
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
