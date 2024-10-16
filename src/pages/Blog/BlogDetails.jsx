import { useParams, useNavigate, Link } from "react-router-dom";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import useGetData from "../../api/api";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useGetData();

  // Find the index of the current post by UUID
  const currentPostIndex = blogs.findIndex((post) => post.id === id);
  const currentPost = blogs[currentPostIndex];

  // Determine the previous and next post using index
  const prevPost = currentPostIndex > 0 ? blogs[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < blogs.length - 1 ? blogs[currentPostIndex + 1] : null;

  // Handlers for navigating to previous and next posts
  const handlePreviousClick = () => {
    if (prevPost) {
      navigate(`/blogdetails/${prevPost.id}`);
    }
  };

  const handleNextClick = () => {
    if (nextPost) {
      navigate(`/blogdetails/${nextPost.id}`);
    }
  };

  return (
    <>
      {/*     Background image    */}
      <div
        className="bg-cover bg-no-repeat bg-center h-60 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/assets/page-bg.jpg)",
        }}
      >
        <div className="myContainer text-white">
          <h2 className="heading2 mb-8">Latest Articles</h2>
          <h5 className="heading5">
            Home - <span className="text-blue-400">Our publications</span>
          </h5>
        </div>
      </div>

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

              {/* Post Title */}
              <h2 className="mt-4 mb-6 heading2">{currentPost.title_en}</h2>

              {/* Image */}
              <div className="gallery mt-10 mb-10">
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
                      className="text-left text-lg text-gray-600 hover:text-[#c3af41] flex items-center"
                    >
                      <span className="mr-2">&#8592;</span>
                      <span className="font-medium">Previous</span>
                    </button>
                    <Link
                      to={`/blogdetails/${prevPost.id}`}
                      className="text-lg mt-2 hover:underline"
                    >
                      {prevPost.title_en}
                    </Link>
                  </div>
                )}

                {nextPost && (
                  <div className="next-post border border-gray-300 p-4 flex flex-col text-right">
                    <button
                      onClick={handleNextClick}
                      className="text-right text-lg text-gray-600 hover:text-[#c3af41] flex items-center justify-end"
                    >
                      <span className="font-medium">Next</span>
                      <span className="ml-2">&#8594;</span>
                    </button>
                    <Link
                      to={`/blogdetails/${nextPost.id}`}
                      className="text-lg mt-2 hover:underline"
                    >
                      {nextPost.title_en}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold">Post Not Found</h2>
              <p className="mt-4 text-gray-600">
                The post you're looking for does not exist.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar: 30% width on large screens */}
        <div className="lg:w-[30%]">
          <div className="mb-20">
            <ServiceSidebar />
          </div>
          <div className="mb-20">
            <PostSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
