import React from 'react';

const PostSideBarCard = () => {
  const posts = [
    {
      id: 1,
      title: "Citizens allowed to cross Kyrgyz-Uzbek border with an ID card",
      date: "2023-12-05",
      
    },
    {
      id: 2,
      title: "Бу йил Ўзбекистонда қандай қиш кутилмоқда? – иқлимшунос билан интервю",
      date: "2023-12-07",
      
    },
    {
      id: 3,
      title: "New tariffs to be introduced in Tashkent public transport",
      date: "2023-12-05",
     
    },
    {
      id: 4,
      title: "«Бахти Ташкентский» 15 суткага қамалди",
      date: "2023-12-06",
     
    },
    {
      id: 5,
      title: "Bakhtiyor Saidov and David Cameron",
      date: "2023-12-05",
      
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
                href={`/postdetails/${post.id}`} 
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
