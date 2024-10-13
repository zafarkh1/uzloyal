import React from 'react';
import { useParams } from 'react-router-dom';
import BlogSidebarCard from '../ServiceCards/BlogSideBarCard'; // Adjust the import path as necessary
import { details } from './DetailDatas';

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  // Find the specific service based on the ID from the URL
  const service = details.find((s) => s.id === Number(id)); // Using Number(id)

  // Set fixed width and height for images and text
  const imageStyles = {
    width: '90%', // Use '100%' to take full width of the container
    height: '500px', // Set a fixed height (adjust as necessary)
    objectFit: 'cover', // This will maintain the aspect ratio and cover the container
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const paragraphStyles = {
    fontSize: '20px',
    lineHeight: '1.2',
    color: '#333',
    marginBottom: '20px',
    maxWidth: '90%',
    height: '500px', // Set height to match the image
    overflowY: 'auto', // Allow scrolling if the text exceeds the height
  };

  return (
    <div
      className=""
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        className="col-lg-12 col-md-12 order-lg-2 order-1"
        style={{ display: 'flex' }}
      >
        {/* Sidebar */}
        <div className="sidebar" style={{ width: '30%', padding: '20px' }}>
          <BlogSidebarCard />
        </div>

        {/* Main Content Area */}
        <div
          className="details-content"
          style={{
            width: '70%', // Increased width to extend by 200px
            padding: '20px',
            maxWidth: '1400px', // Set a max width to prevent it from growing too large
          }}
        >
          {service ? (
            <div className="service-details">
              <img
                src={service.imgSrc}
                alt={service.alt || 'Service Image'} // Ensure to provide a fallback for alt text
                style={imageStyles} // Apply the image styles
              />
              <h2
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                {service.title}
              </h2>
              <div style={{ width: '100%' }}>
                <p style={paragraphStyles}>{service.description}</p>
              </div>
            </div>
          ) : (
            <p>Service not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
