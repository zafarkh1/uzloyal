import useGetData from "../../api/api";
import { useNavigate } from "react-router-dom";

function LatestNews(props) {
  const news = useGetData();
  const navigate = useNavigate();

  return (
    <>
      <div className="md:border-l-2 md:border-[#cdb091] md:pl-8 lg:text-left text-center">
        <p className="heading5 text-[#cdb091]">News</p>
        <h5 className="heading2 lg:my-3 my-1">Latest News Update</h5>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 lg:my-10 my-6">
        {news.news.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start lg:gap-4 gap-2"
          >
            <img
              src={`https://test.uzloyal.uz/api/uploads/images/${item.news_images[0]["image.src"]}`}
              alt="img"
              className="w-full object-cover h-56 rounded-lg"
            />
            <p className="text-[#c4c4c4]">
              <span>{item.created_at.slice(0, 10)}</span>
              <span className="ml-6">{item.author}</span>
            </p>
            <p className="text-left heading5">{item.title_en}</p>
            <div className="flex items-center">
              <p className="w-8 h-[2px] bg-primary"></p>
              <p
                className="text-primary ml-4 cursor-pointer"
                onClick={() => {
                  navigate(`/newsdetails/${item.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestNews;
