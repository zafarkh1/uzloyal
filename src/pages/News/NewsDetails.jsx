import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";

const NewsDetails = () => {
  const { id } = useParams(); // Get the current post ID from URL params
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  // Sample data for the posts (you can replace this with actual data or fetch from an API)
  const posts = [
    {
      id: 1,
      title: "Citizens allowed to cross Kyrgyz-Uzbek border with an ID card",
      author: "Sarvarjon Amriyev",
      date: "2023-12-05",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/64e4d722-8425-4afd-8db1-e8220e16da1c.jpeg",
    },
    {
      id: 2,
      title:
        "Бу йил Ўзбекистонда қандай қиш кутилмоқда? – иқлимшунос билан интервю",
      author: "Sherali Jo'rayev",
      date: "2023-12-07",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/98026dbe-25f8-4d76-b52e-e258796477c4.jpeg",
    },
    {
      id: 3,
      title: "New tariffs to be introduced in Tashkent public transport",
      author: "",
      date: "2023-12-05",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/3b538972-d020-498f-8be7-61b4fd764557.jpeg",
    },
    {
      id: 4,
      title: "«Бахти Ташкентский» 15 суткага қамалди",
      author: "",
      date: "2023-12-06",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/15ac793c-ed2f-4ae2-adbd-f66089226b6d.jpeg",
    },
    {
      id: 5,
      title: "Bakhtiyor Saidov and David Cameron",
      author: "Sarvarjon Amriyev",
      date: "2023-12-05",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/84974d67-53db-4bdc-a668-b90fab3576b2.jpeg",
    },
  ];

  // Find the current post based on the ID
  const currentPostIndex = posts.findIndex((post) => post.id === parseInt(id));
  const currentPost = posts[currentPostIndex];

  // Determine the previous and next post
  const prevPost = currentPostIndex > 0 ? posts[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < posts.length - 1 ? posts[currentPostIndex + 1] : null;

  // Handlers for navigating to previous and next posts
  const handlePreviousClick = () => {
    if (prevPost) {
      navigate(`/newsdetails/${prevPost.id}`); // Use navigate instead of history.push
    }
  };

  const handleNextClick = () => {
    if (nextPost) {
      navigate(`/newsdetails/${nextPost.id}`); // Use navigate instead of history.push
    }
  };

  return (
    <div className="flex w-full mt-20">
      {/* Main Content: 70% width */}
      <div className="w-[70%] px-4" style={{ marginLeft: "50px" }}>
        {currentPost && (
          <div className="wpo-blog-content mt-10 mb-10">
            <div className="post format-standard-image">
              <div className="entry-meta">
                <ul className="flex space-x-4 items-center justify-start">
                  <li className="flex items-center">
                    <i className="fi flaticon-user mr-1"></i>
                    <span>By </span>
                    <Link
                      to={`/newsdetails/${currentPost.id}`}
                      className="ml-1 hover:text-[#c3af41]"
                    >
                      {currentPost.author}
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <i className="fi flaticon-calendar mr-1"></i>
                    <span>{currentPost.date}</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-bold mt-5 mb-5 text-3xl">
                {currentPost.title}
              </h2>

              <div className="gallery mt-10 mb-10">
                <img
                  src={currentPost.imageUrl}
                  alt={currentPost.title}
                  className="max-w-[700px] mt-5 mb-5"
                />
              </div>

              <div className="tag-share clearfix mt-10 mb-10">
                {/* Tag and Share Section */}
              </div>

              {/* Previous and Next Post Navigation */}
              <div className="more-posts flex justify-between w-[800px] ml-0 mt-10 mb-10">
                {prevPost && (
                  <div className="previous-post border border-gray-300 p-4 flex flex-col">
                    <button
                      onClick={handlePreviousClick}
                      className="flex flex-col items-start"
                    >
                      <span className="post-control-link hover:text-[#c3af41] text-lg flex items-center">
                        <span className="mr-2">&#8592;</span>
                        Предыдущий
                      </span>
                      <span className="post-name text-lg">
                        {prevPost.title}
                      </span>
                    </button>
                  </div>
                )}

                {nextPost && (
                  <div className="next-post border border-gray-300 p-4 flex flex-col">
                    <button onClick={handleNextClick} className="flex flex-col">
                      <div className="flex justify-end items-center hover:text-[#c3af41]">
                        <span className="text-lg">Следующий</span>
                        <span className="ml-2 text-lg">&#8594;</span>
                      </div>
                      <span className="post-name text-lg text-left">
                        {nextPost.title}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar: 30% width */}
      <div className="w-[30%] px-4 mr-14 flex flex-col">
        {" "}
        {/* Changed to flex-col to match post layout */}
        <div className="mb-20 flex-grow">
          {" "}
          {/* Added flex-grow to take remaining space */}
          <ServiceSidebar />
        </div>
        <div className="mb-20 flex-grow">
          {" "}
          {/* Added flex-grow to take remaining space */}
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
