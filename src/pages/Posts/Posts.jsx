import React from 'react';
import { Link } from 'react-router-dom';
import BlogSidebarCard from '../Cards/BlogSideBarCard';
import PostSideBarCard from '../Cards/PostSideBarCard';

const Posts = () => {
  const posts = [
    {
      id: 1,
      author: 'Xushnudbek Xudoyberdiyev',
      date: '2023-12-05',
      image: 'https://test.uzloyal.uz/api/uploads/images/7e04838b-5a7b-427e-a51f-7fc8bd9a4d81.jpeg',
      title: 'Onix and Tracker cars withdrawn from sale',
    },
    {
      id: 2,
      author: 'Sherali Jo\'rayev',
      date: '2023-12-05',
      image: 'https://test.uzloyal.uz/api/uploads/images/3af5cde9-4217-4d6b-9245-caa963cd082a.jpeg',
      title: 'Saudi Arabia plans to attract skilled workers from Uzbekistan in 5 spheres',
    },
    {
      id: 3,
      author: 'Sarvarjon Amriyev',
      date: '2023-12-05',
      image: 'https://test.uzloyal.uz/api/uploads/images/87fc6c97-7bcc-4f33-a247-75a4970bd87b.jpeg',
      title: '«Убийство младенцев недопустимо, Узбекистан поддерживает палестинский народ» — Абдулла Арипов',
    },
  ];

  // Style definitions for images and container
  const imageStyles = {
    width: '90%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  return (
    <div className="flex justify-between w-full min-h-screen mt-16 ml-14">
      {/* Main Content Area: 70% width */}
      <div className="w-[70%] px-4">
        <div className="wpo-blog-content">
          {posts.map((post) => (
            <div className="post mb-20" key={post.id}>
              <div className="entry-media video-holder text-center">
                <img
                  src={post.image}
                  alt={post.title}
                  style={imageStyles} // Apply the image styles
                />
              </div>
              <div className="entry-meta">
                <ul className="flex space-x-4 text-sm text-gray-500">
                  <li className="flex items-center">
                    <i className="fi flaticon-user mr-1"></i> By
                    <a href={`/postsdetails/${post.id}`} className="text-blue-500 hover:underline ml-1">
                      {post.author}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <i className="fi flaticon-calendar mr-1"></i> {post.date}
                  </li>
                </ul>
              </div>
              <div className="entry-details mt-4">
                <h3 className="text-2xl font-bold mb-4">
                  <Link to={`/postdetails/${post.id}`}>{post.title}</Link>
                </h3>
                <Link className="read-more text-lg text-gray-400 hover:text-[#CCCC00]" to={`/postdetails/${post.id}`}>
                  ЧИТАТЬ ДАЛЕЕ...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Area: 30% width */}
      <div className="w-[30%] px-4 mr-20"> {/* Added mr-14 to the sidebar */}
        <div className="mb-20">
          <BlogSidebarCard />
        </div>
        <div className="mb-20">
          <PostSideBarCard />
        </div>
      </div>
    </div>
  );
};

export default Posts;
