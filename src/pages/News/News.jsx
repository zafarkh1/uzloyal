import React from "react";
import { Link } from "react-router-dom"; // Use Link instead of anchor for client-side routing
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import useGetData from "../../api/api";

const News = () => {
  const news = useGetData();
  console.log(news.news);
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
                  By <span className="text-secondary">{post.author}</span>
                </li>
                <li>{post.created_at.slice(0, 10)}</li>
              </ul>
              <h3 className="text-2xl font-bold my-4">
                <Link to={`/newsdetails/${post.id}`}>{post.title_en}</Link>
              </h3>
              <Link
                className="read-more text-lg text-gray-400 no-underline hover:bg-secondary"
                to={`/newsdetails/${post.id}`}
              >
                ЧИТАТЬ ДАЛЕЕ...
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
