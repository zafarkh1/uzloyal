import { useNavigate } from "react-router-dom";
import useGetData from "../../api/api";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";

const Blogs = () => {
  const navigate = useNavigate();
  const { blogs } = useGetData();

  return (
    <>
      {/*     Background image    */}
      <div
        className="bg-cover bg-no-repeat bg-center h-60 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/assets/blog-bg.jpg)",
        }}
      >
        <div className="myContainer text-white">
          <h2 className="heading2 mb-8">Latest Articles</h2>
          <h5 className="heading5">
            Home - <span className="text-blue-400">Our publications</span>
          </h5>
        </div>
      </div>

      {/*                 Blog Page Content    */}
      <div className="myContainer flex lg:flex-row flex-col justify-between lg:gap-10 gap-4 w-full min-h-screen mt-12">
        {/*     Main Content Area: 70% width */}
        <div className="lg:w-[70%]">
          {blogs.map((post) => (
            <div className="lg:mb-14 mb-10" key={post.id}>
              <div className="entry-media video-holder text-center">
                <img
                  src={`https://test.uzloyal.uz/api/uploads/images/${post.blog_images[0]["image.src"]}`}
                  alt={post.title_en}
                  className="w-full rounded-lg mb-6 object-cover"
                />
              </div>
              <div className="entry-meta">
                <ul className="flex text-sm text-gray-500">
                  <li
                    className="flex items-center"
                    onClick={() => navigate(`/blogdetails/${post.id}`)}
                  >
                    By
                    <span className="text-blue-500 hover:underline ml-1 cursor-pointer">
                      {post.author}
                    </span>
                  </li>
                  <li className="flex items-center ml-4">
                    {post.created_at.slice(0, 10)}
                  </li>
                </ul>
              </div>
              <div className="entry-details mt-4">
                <h3 className="text-2xl font-bold mb-4">{post.title_en}</h3>
                <span
                  onClick={() => {
                    navigate(`/blogdetails/${post.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="text-lg text-gray-400 hover:text-[#CCCC00] cursor-pointer"
                >
                  Read more ...
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Area: 30% width */}
        <div className="lg:w-[30%]">
          <div className="mb-20">
            <ServiceSidebar />
          </div>
          <div>
            <PostSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
