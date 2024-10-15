import React from "react";
import { Link } from "react-router-dom"; // Use Link instead of anchor for client-side routing
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";

const News = () => {
  const posts = [
    {
      id: 1,
      author: "Sarvarjon Amriyev",
      date: "2023-12-05",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/64e4d722-8425-4afd-8db1-e8220e16da1c.jpeg",
      title: "Citizens allowed to cross Kyrgyz-Uzbek border with an ID card",
    },
    {
      id: 2,
      author: "Sherali Jo'rayev",
      date: "2023-12-07",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/98026dbe-25f8-4d76-b52e-e258796477c4.jpeg",
      title:
        "Бу йил Ўзбекистонда қандай қиш кутилмоқда? – иқлимшунос билан интервю",
    },
    {
      id: 3,
      date: "2023-12-05",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/3b538972-d020-498f-8be7-61b4fd764557.jpeg",
      title: "New tariffs to be introduced in Tashkent public transport",
    },
    {
      id: 4,
      date: "2023-12-06",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/15ac793c-ed2f-4ae2-adbd-f66089226b6d.jpeg",
      title: "«Бахти Ташкентский» 15 суткага қамалди",
    },
    {
      id: 5,
      author: "Sarvarjon Amriyev",
      date: "2023-12-05",
      imageUrl:
        "https://test.uzloyal.uz/api/uploads/images/84974d67-53db-4bdc-a668-b90fab3576b2.jpeg",
      title: "Bakhtiyor Saidov and David Cameron",
    },
  ];

  // Style definitions for images
  const imageStyles = {
    width: "90%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  return (
    <div className="flex justify-center min-h-screen mt-20">
      {/* Container for Sidebar and Posts */}
      <div className="flex w-full">
        {/* Sidebar */}
        <div className="w-[30%] px-4 mr-4 flex flex-col">
          {" "}
          {/* Adjusted margin-right */}
          <div className="mb-20">
            {" "}
            {/* Spacing for BlogSidebarCard */}
            <ServiceSidebar />
          </div>
          <div className="mb-20">
            {" "}
            {/* Spacing for PostSideBarCard */}
            <PostSidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="details-content w-[70%] p-4">
          <div className="wpo-blog-content">
            {posts.map((post) => (
              <div className="post mb-10" key={post.id}>
                <div className="entry-media video-holder text-center">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    style={imageStyles} // Apply the image styles
                  />
                </div>
                <div className="entry-meta mb-4">
                  <ul>
                    <li className="flex items-center text-gray-500">
                      <i className="fi flaticon-user mr-2"></i> By{" "}
                      <span>{post.author}</span>
                    </li>
                    <li className="flex items-center text-gray-500">
                      <i className="fi flaticon-calendar mr-2"></i> {post.date}
                    </li>
                  </ul>
                </div>
                <div className="entry-details">
                  <h3 className="text-2xl font-bold mb-4">
                    <Link to={`/newsdetails/${post.id}`}>{post.title}</Link>
                  </h3>
                  <Link
                    className="read-more text-lg text-gray-400 no-underline hover:text-[#CCCC00]"
                    to={`/newsdetails/${post.id}`}
                  >
                    ЧИТАТЬ ДАЛЕЕ...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
