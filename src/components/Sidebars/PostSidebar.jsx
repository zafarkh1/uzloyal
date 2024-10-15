import React from "react";
import useGetData from "../../api/api";

const PostSideBarCard = () => {
  const news = useGetData();

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      {" "}
      {/* Blog sidebar container */}
      <h3 className="heading5 mb-6">Related Posts</h3> {/* Title */}
      <ul className="space-y-3">
        {" "}
        {/* List of recent posts */}
        {news.news.map((post) => (
          <li
            key={post.id}
            className="border-b border-gray-300 pb-4 flex flex-col transition duration-200" // Changed to flex-col
          >
            <a
              href={`/postdetails/${post.id}`}
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
