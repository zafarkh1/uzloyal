import React from "react";
import useGetData from "../api/api";
import bgimg from "../assets/images/bg.png";
import { Link } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import Practicesingle from "../components/practicesingle/Practice-single";

function News(props) {
  const { news } = useGetData();
  const { services } = useGetData();
  console.log(news, "salom");
  return (
    <div className="w-full">
      <div
        className="h-[45vh] bg-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1320px] w-full">
          <h1 className="text-white text-[50px] mt-[30px] mb-5 leading-[69px] font-normal font-serif">
            So'nggi Yangiliklar
          </h1>
          <div className="text-white text-[20px] flex gap-[6px]">
            <span className="hover:text-[#adb5bd] duration-500 ease-out">
              <Link to="/">Home</Link>
            </span>
            -<span>Yangiliklar</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto my-10 w-full">
        <div className="flex gap-10">
          <div className="w-[30%]">
            <div className="bg-[#f5f5f5] rounded-[10px] p-6">
              <h3 className="text-[#1e2e3e] mb-5 text-[25px] font-normal">
                Xizmatlar
              </h3>

              {services?.slice(0, 8).map((val, index) => (
                <Link
                  to={`/practice-single/${val.id}`}
                  className="bg-white underline hover:bg-[#cdb091] hover:text-white transition duration-500 ease-in-out flex text-left font-semibold my-3 items-center gap-2 p-5 text-[#474f62] text-[14px] w-full rounded-[12px]"
                  key={index}
                >
                  <HiChevronDoubleRight className="text-[16px] w-[20px]" />
                  <span className="w-full">{val.title_uz}</span>
                </Link>
              ))}
            </div>

            <div className="bg-[#f5f5f5] rounded-[10px] p-6 mt-12">
              <h3 className="text-[#1e2e3e] mb-5 text-[25px] font-normal">
                O'xshash postlar
              </h3>

              {news?.slice(0, 5).map((val, index) => (
                <button
                  className="hover:text-[#cdb091] transition duration-500 ease-in-out text-left font-semibold my-3 items-center gap-2 px-5 text-[#474f62] text-[14px] w-full rounded-[12px]"
                  key={index}
                >
                  <span className="w-full">{val.title_uz}</span>
                  <span className="block mt-3 text-[#cdb091]">
                    {val.created_at.split("T")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="w-[70%]">
            <div>
              {news?.slice(0, 5).map((val, index) => (
                <div key={index} className="mb-10">
                  <img
                    className="w-full h-[480px] border-[2px] border-red-400"
                    // src={val.news_images[0]["image.src"]}
                    src={val.news_images[0].image_src}
                    alt={val.news_images[0]["news_id"]}
                  />

                  <div>
                    <div className="flex gap-5 text-[12px] items-center my-[25px]">
                      <div className="flex gap-2">
                        <span className="text-[#525252]">BY</span>
                        <span className="uppercase text-[#6e6e6e] underline duration-500 ease-in hover:text-[#cdb091]">
                          <Link>{val.author}</Link>
                        </span>
                      </div>

                      <div className="flex gap-4 items-center">
                        <span className="w-[7px] h-[7px] rounded-full bg-[#cdb091]"></span>
                        <span>{val.created_at.split("T")[0]}</span>
                      </div>
                    </div>

                    <div className="mb-[25px] text-[#525252]">
                      <h3>{val.title_uz}</h3>
                    </div>

                    <div className="uppercase text-[#6e6e6e] underline duration-500 ease-in hover:text-[#cdb091]">
                      <Link>KO'PROQ O'QISH...</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Practicesingle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
