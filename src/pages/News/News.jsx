import React from 'react';
import BlogSidebarCard from '../ServiceCards/BlogSideBarCard'; // Adjust the import path as necessary
import { Link } from 'react-router-dom'; // Use Link instead of anchor for client-side routing
const NewPosts = () => {
  const posts = [
    {
      id: 1,
      author: 'Sarvarjon Amriyev',
      date: '2023-12-05',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/64e4d722-8425-4afd-8db1-e8220e16da1c.jpeg',
      title: 'Citizens allowed to cross Kyrgyz-Uzbek border with an ID card',
      link: '/newsdetails/:id',
    },
    {
      id: 2,
      author: 'Sherali Jo\'rayev',
      date: '2023-12-07',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/98026dbe-25f8-4d76-b52e-e258796477c4.jpeg',
      title: 'Бу йил Ўзбекистонда қандай қиш кутилмоқда? – иқлимшунос билан интервю',
      link: '/newsdetails/:id',
    },
    {
      id: 3,
      date: '2023-12-05',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/3b538972-d020-498f-8be7-61b4fd764557.jpeg',
      title: 'New tariffs to be introduced in Tashkent public transport',
      link: '/news-single/aef39259-9f7f-46c6-990d-14e9df3ff5e1',
    },
    {
      id: 4,
      date: '2023-12-06',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/15ac793c-ed2f-4ae2-adbd-f66089226b6d.jpeg',
      title: '«Бахти Ташкентский» 15 суткага қамалди',
      link: '/newsdetails/:id',
    },
    {
      id: 5,
      author: 'Sarvarjon Amriyev',
      date: '2023-12-05',
      imageUrl: 'https://test.uzloyal.uz/api/uploads/images/84974d67-53db-4bdc-a668-b90fab3576b2.jpeg',
      title: 'Bakhtiyor Saidov and David Cameron',
      link: '/newsdetails/:id',
    },
  ];

  // Style definitions for images and paragraphs
  const imageStyles = {
    width: '90%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  

  return (
     <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh' }}>
      {/* Container for Sidebar and Posts */}
      <div style={{ display: 'flex', width: '100%' }}>
        {/* Sidebar */}
         <div className="sidebar" style={{ width: '30%', padding: '20px' }}>
          <BlogSidebarCard />
        </div>

        {/* Main Content Area */}
        <div className="details-content" style={{ width: '70%', padding: '20px' }}>
          <div className="wpo-blog-content">
            {posts.map((post) => (
              <div className="post" key={post.id} style={{ marginBottom: '20px' }}>
                <div className="entry-media video-holder" style={{ textAlign: 'center' }}>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    style={imageStyles} // Apply the image styles
                  />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By <a href={post.link}>{post.author}</a>
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i> {post.date}
                    </li>
                  </ul>
                </div>
                <div className="entry-details">
                  <h3 style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px' }}>
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <Link 
  className="read-more text-lg text-gray-400 no-underline hover:text-[#CCCC00]" 
  to={post.link}
>
  ЧИТАТЬ ДАЛЕЕ...
</Link>



                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
