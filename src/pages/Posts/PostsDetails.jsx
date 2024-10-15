
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PostSideBarCard from '../Cards/PostSideBarCard';
import BlogSidebarCard from '../Cards/BlogSideBarCard';

const PostDetails = () => {
  const { id } = useParams(); // Get the current post ID from URL params
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  // Sample data for posts (replace with actual data or API call)
  const posts = [
    {
      id: 1,
      title: 'Onix and Tracker cars withdrawn from sale',
      author: 'Xushnudbek Xudoyberdiyev',
      date: '2023-12-05',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/7e04838b-5a7b-427e-a51f-7fc8bd9a4d81.jpeg',
    },
    {
      id: 2,
      title: 'Saudi Arabia plans to attract skilled workers from Uzbekistan in 5 spheres',
      author: 'Sherali Jo\'rayev',
      date: '2023-12-05',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/3af5cde9-4217-4d6b-9245-caa963cd082a.jpeg',
    },
    {
      id: 3,
      title: '«Убийство младенцев недопустимо, Узбекистан поддерживает палестинский народ» — Абдулла Арипов',
      author: 'Sarvarjon Amriyev',
      date: '2023-12-05',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/87fc6c97-7bcc-4f33-a247-75a4970bd87b.jpeg',
    },
  ];

  // Convert the id from useParams to a number
  const currentPostId = parseInt(id, 10);

  // Find the current post based on the ID
  const currentPostIndex = posts.findIndex((post) => post.id === currentPostId);
  const currentPost = posts[currentPostIndex];

  // Determine the previous and next post
  const prevPost = currentPostIndex > 0 ? posts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex < posts.length - 1 ? posts[currentPostIndex + 1] : null;

  // Handlers for navigating to previous and next posts
  const handlePreviousClick = () => {
    if (prevPost) {
      navigate(`/postdetails/${prevPost.id}`);
    }
  };

  const handleNextClick = () => {
    if (nextPost) {
      navigate(`/postdetails/${nextPost.id}`);
    }
  };

  return (
    <div className="flex w-full min-h-screen mt-16 ml-14">
      {/* Main Content: 70% width on large screens */}
      <div className="lg:w-[70%] w-full px-6 lg:px-12 py-10 flex flex-col" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {currentPost ? (
          <div className="wpo-blog-content mb-10 flex-grow"> {/* Added flex-grow to take remaining space */}
            <div className="post format-standard-image">
              {/* Meta Information */}
              <div className="entry-meta">
                <ul className="flex space-x-4 items-center justify-start text-gray-600">
                  <li className="flex items-center">
                    <i className="fi flaticon-user mr-1"></i>
                    <span>By </span>
                    <Link to={`/postdetails/${currentPost.id}`} className="ml-1 hover:text-[#c3af41]">
                      {currentPost.author}
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <i className="fi flaticon-calendar mr-1"></i>
                    <span>{currentPost.date}</span>
                  </li>
                </ul>
              </div>

              {/* Post Title */}
              <h2 className="font-bold mt-8 mb-6 text-4xl lg:text-5xl">
                {currentPost.title}
              </h2>

              {/* Image */}
              <div className="gallery mt-10 mb-10">
                <img
                  src={currentPost.imageUrl}
                  alt={currentPost.title}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Previous and Next Post Navigation */}
              <div className="more-posts flex justify-between w-full mt-10 mb-10">
                {prevPost && (
                  <div className="previous-post border border-gray-300 p-4 flex flex-col">
                    <button
                      onClick={handlePreviousClick}
                      className="text-left text-lg text-gray-600 hover:text-[#c3af41] flex items-center"
                    >
                      <span className="mr-2">&#8592;</span>
                      <span className="font-medium">Previous</span>
                    </button>
                    <Link to={`/postdetails/${prevPost.id}`} className="text-lg mt-2 hover:underline">
                      {prevPost.title}
                    </Link>
                  </div>
                )}

                {nextPost && (
                  <div className="next-post border border-gray-300 p-4 flex flex-col text-right">
                    <button
                      onClick={handleNextClick}
                      className="text-right text-lg text-gray-600 hover:text-[#c3af41] flex items-center justify-end"
                    >
                      <span className="font-medium">Next</span>
                      <span className="ml-2">&#8594;</span>
                    </button>
                    <Link to={`/postdetails/${nextPost.id}`} className="text-lg mt-2 hover:underline">
                      {nextPost.title}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold">Post Not Found</h2>
            <p className="mt-4 text-gray-600">The post you're looking for does not exist.</p>
          </div>
        )}
      </div>

      {/* Sidebar: 30% width on large screens */}
      <div className="w-[30%] px-4 mr-14 flex flex-col"> {/* Changed to flex-col to match post layout */}
        <div className="mb-20 flex-grow"> {/* Added flex-grow to take remaining space */}
          <BlogSidebarCard />
        </div>
        <div className="mb-20 flex-grow"> {/* Added flex-grow to take remaining space */}
          <PostSideBarCard />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
