import React from "react";
import useGetData from "../../api/api";

function LatestNews(props) {
  const news = useGetData();
  console.log(news.news);
  return (
    <>
      <div className="border-l-2 border-[#cdb091] pl-8">
        <p className="heading5 text-[#cdb091]">News</p>
        <h5 className="heading2 my-3">Latest News Update</h5>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 my-10">
        {news.news.slice(0, 3).map((item) => (
          <div key={item.id} className="flex flex-col items-start gap-4">
            <img
              src={`https://test.uzloyal.uz/api/uploads/images/${item.news_images[0]["image.src"]}`}
              alt="img"
              className="w-full object-cover h-56"
            />
            <p className="text-[#c4c4c4]">
              <span>{item.created_at.slice(0, 10)}</span>
              <span className="ml-6">{item.author}</span>
            </p>
            <p className="text-left lg:text-2xl font-semibold">
              {item.title_en}
            </p>
            <div className="flex items-center">
              <p className="w-8 h-[2px] bg-primary"></p>
              <a href="/" className="text-primary ml-4">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestNews;
