import useGetData from "../../api/api";

const PostSideBarCard = () => {
  const news = useGetData();

  return (
    <div className="bg-gray-100 lg:p-8 sm:p-6 p-4 rounded-lg shadow-md">
      {/* Blog sidebar container */}
      <h3 className="heading5 sm:mb-6 mb-3">Related Posts</h3>
      <ul className="space-y-3">
        {" "}
        {/* List of recent posts */}
        {news.news.map((post) => (
          <li
            key={post.id}
            className="border-b border-gray-300 pb-4 flex flex-col text transition duration-200"
          >
            <a
              href={`/newsdetails/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              <span className="mr-2">&gt;&gt;</span> {post.title_en}
            </a>
            <span className="text-[#c3af41] text-sm mt-1">
              {post.created_at.slice(0, 10)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostSideBarCard;
