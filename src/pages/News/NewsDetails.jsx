import React from 'react';
import BlogSidebarCard from '../ServiceCards/BlogSideBarCard'; // Sidebar uchun componentni import qilish

const NewsDetails = () => {
  return (
    <div className="flex w-full"> {/* Flex qutisida ikkala qismni yonma-yon qilish uchun */}
      {/* Chap tomonda NewsDetails qismi, 70% kenglikda */}
      <div className="w-[70%] px-4" style={{ marginLeft: '50px' }}> {/* Margin chap tomonga qo'shildi */}
        <div className="wpo-blog-content mt-10 mb-10">
          <div className="post format-standard-image">
            <div className="entry-meta">
              <ul className="flex space-x-4 items-center justify-start">
                <li className="flex items-center">
                  <i className="fi flaticon-user mr-1"></i>
                  <span>By </span>
                  <a href="/news-single/2e0bc57c-462b-4bb4-95c7-05a14a496908" className="ml-1 hover:text-[#c3af41]">
                    Sarvarjon Amriyev
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fi flaticon-calendar mr-1"></i>
                  <span>2023-12-05</span>
                </li>
              </ul>
            </div>

            <h2 className="font-bold mt-5 mb-5 text-3xl">
              Citizens allowed to cross Kyrgyz-Uzbek border with an ID card
            </h2>

            <p>
              Citizens allowed to cross Kyrgyz-Uzbek border with an ID card
            </p>

            <div className="gallery mt-10 mb-10">
              <img
                src="https://test.uzloyal.uz/api/uploads/images/64e4d722-8425-4afd-8db1-e8220e16da1c.jpeg"
                alt="Citizens crossing the Kyrgyz-Uzbek border"
                className="max-w-[700px] mt-5 mb-5"
              />
            </div>
          </div>

          <div className="tag-share clearfix mt-10 mb-10">
            <div className="tag flex items-center">
              <span className="font-bold text-lg mr-2">Share:</span>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="/blog-single/Justice-May-For-You-If-You-Are-Innocen"
                    className="bg-gray-200 text-black py-2 px-4 rounded active:bg-gold hover:bg-gray-100 hover:text-[#c3af41]"
                  >
                    Planning
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-single/Justice-May-For-You-If-You-Are-Innocen"
                    className="bg-gray-200 text-black py-2 px-4 rounded active:bg-gold hover:bg-gray-100 hover:text-[#c3af41]"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/blog-single/Justice-May-For-You-If-You-Are-Innocen"
                    className="bg-gray-200 text-black py-2 px-4 rounded active:bg-gold hover:bg-gray-100 hover:text-[#c3af41]"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="more-posts flex justify-between w-[800px] ml-0 mt-10 mb-10">
  <div className="previous-post border border-gray-300 p-4 flex flex-col">
    <a href="/news-single/2e0bc57c-462b-4bb4-95c7-05a14a496908" className="flex flex-col items-start">
      <span className="post-control-link hover:text-[#c3af41] text-lg flex items-center"> {/* Increased text size */}
        <span className="mr-2">&#8592;</span> {/* Left arrow icon */}
        Предыдущий
      </span>
      <span className="post-name text-lg"> {/* Increased text size */}
        Citizens allowed to cross Kyrgyz-Uzbek border with an ID card
      </span>
    </a>
  </div>
  <div className="next-post border border-gray-300 p-4 flex flex-col">
  <a href="/news-single/98d0f942-9931-4366-9a55-6de91e704b8c" className="flex flex-col">
  <div className="flex justify-end items-center hover:text-[#c3af41]"> {/* Align items to the right */}
    <span className="text-lg">Следующий</span>
    <span className="ml-2 text-lg">&#8594;</span> {/* Right arrow icon with margin for spacing */}
  </div>
  <span className="post-name text-lg text-left"> {/* Keep this aligned to the left */}
    Бу йил Ўзбекистонда қандай қиш кутилмоқда? – иқлимшунос билан интервю
  </span>
</a>

</div>


  
</div>

          
        </div>
      </div>

      {/* O'ng tomonda BlogSidebarCard qismi, 30% kenglikda */}
      <div className="w-[30%] px-4 mt-12 mr-12">
        <BlogSidebarCard />
      </div>
    </div>
  );
};

export default NewsDetails;
