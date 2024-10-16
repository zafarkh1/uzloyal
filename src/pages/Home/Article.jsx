import useGetData from "../../api/api";
import { useNavigate } from "react-router-dom";

function Article(props) {
  const { blogs } = useGetData();
  const navigate = useNavigate();

  return (
    <div className="text-center my-16">
      <p className="heading5 text-[#cdb091]">Articles</p>
      <h5 className="heading2 my-3">Latest Article Update</h5>
      <p className="w-24 h-[1px] mx-auto bg-[#cdb091]"></p>
      <div className="grid lg:grid-cols-3 gap-4 mt-10">
        {blogs.slice(0, 3).map((item) => (
          <div key={item.id} className="flex flex-col items-start gap-4">
            <img
              src={`https://test.uzloyal.uz/api/uploads/images/${item.blog_images[0]["image.src"]}`}
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
              <p
                className="text-primary ml-4 cursor-pointer"
                onClick={() => {
                  navigate(`/blogdetails/${item.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
