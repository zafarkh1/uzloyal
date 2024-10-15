import React from 'react';

const PostSideBarCard = () => {
  const posts = [
    {
      id: "2e0bc57c-462b-4bb4-95c7-05a14a496908",
      title: "Citizens allowed to cross Kyrgyz-Uzbek border with an ID card",
      date: "2023-12-05",
      url: "/news-single/2e0bc57c-462b-4bb4-95c7-05a14a496908",
    },
    {
      id: "98d0f942-9931-4366-9a55-6de91e704b8c",
      title: "Бу йил Ўзбекистонда қандай қиш кутилмоқда? – иқлимшунос билан интервю",
      date: "2023-12-07",
      url: "/news-single/98d0f942-9931-4366-9a55-6de91e704b8c",
    },
    {
      id: "aef39259-9f7f-46c6-990d-14e9df3ff5e1",
      title: "New tariffs to be introduced in Tashkent public transport",
      date: "2023-12-05",
      url: "/news-single/aef39259-9f7f-46c6-990d-14e9df3ff5e1",
    },
    {
      id: "dff75596-86eb-40b7-8a56-a8c0c0a7249d",
      title: "«Бахти Ташкентский» 15 суткага қамалди",
      date: "2023-12-06",
      url: "/news-single/dff75596-86eb-40b7-8a56-a8c0c0a7249d",
    },
    {
      id: "f300ccdb-a8b2-46f0-8335-51a87612549b",
      title: "Bakhtiyor Saidov and David Cameron",
      date: "2023-12-05",
      url: "/news-single/f300ccdb-a8b2-46f0-8335-51a87612549b",
    },
  ];

  return (
    <div className="col col-lg-4 col-12 mb-20">
      <div className="bg-gray-100 p-5 rounded-lg shadow-md"> {/* Blog sidebar container */}
        <h3 className="text-2xl mb-4 mt-6">Связанные Посты</h3> {/* Title */}
        <ul className="space-y-3"> {/* List of recent posts */}
          {posts.map((post) => (
            <li 
              key={post.id} 
              className="border-b border-gray-300 pb-4 flex flex-col hover:bg-[#CCCC00] transition duration-200" // Changed to flex-col
            >
              <a 
                href={post.url} 
                className="text-blue-500 hover:underline hover:text-[#DCDCDC]" // Similar hover style to BlogSidebarCard
              >
                <span className="mr-2">&gt;&gt;</span> {/* Icon */}
                {post.title}
              </a>
              <span className="text-[#c3af41] text-sm mt-1">{post.date}</span> {/* Date on a new line */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostSideBarCard;
