import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import ServiceLinks from './ServiceLinks'; // Import the ServiceLinks component

const navs = [
  {
    id: 1,
    title: "News",
    link: "/news",
  },
  {
    id: 2,
    title: "Legal library",
    link: "/library",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Document samples",
    link: "/resources",
  },
];

function BottomNavbar(props) {
  const [showServices, setShowServices] = useState(false); // State to manage Services visibility

  return (
    <div className="bg-primary text-white pl-36 relative"> {/* Added relative positioning */}
      <div className="myContainer">
        <ul className="flex justify-between w-2/3">
          {navs.map((item) => (
            <li
              key={item.id}
              onClick={() => item.id === 3 && setShowServices(!showServices)} // Toggle services on click
              className="relative cursor-pointer" // Cursor change on hover for Services
            >
              <Link to={item.link} className="lg:text-xl">
                {item.title}
              </Link>
              {/* Show ServiceLinks when clicked on Services */}
              {item.id === 3 && showServices && (
                <div className="absolute left-0 mt-2 z-10 bg-gray-800">
                  <ServiceLinks /> {/* ServiceLinks component remains open on click */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BottomNavbar;
