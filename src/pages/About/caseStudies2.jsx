import React, { useState } from "react";

function Cases() {
  const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card

  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1",
      description: "Brief description of the case study.",
      img: "/assets/cases/criminal.jfif",
    },
    {
      id: 2,
      title: "Case Study 2",
      description: "Brief description of the case study.",
      img: "/assets/cases/family.jfif",
    },
    {
      id: 3,
      title: "Case Study 3",
      description: "Brief description of the case study.",
      img: "/assets/cases/business.jfif",
    },
  ];

  return (
    <section className="lg:py-16 py-4 my-10">
      <div>
        <div className="text-center lg:mb-12 mb-6">
          <h2 className="heading3 text-gray-800 lg:mb-4 mb-2">
            Our Case Studies
          </h2>
          <p className="text text-gray-600">
            See how we've helped clients achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                className="w-full h-48 object-cover"
                src={study.img}
                alt={study.title}
              />
              <div className="lg:p-6 p-3">
                <h3 className="heading5 text-gray-800 lg:mb-3 mb-1">
                  {study.title}
                </h3>
                <p className="text-gray-600 lg:mb-4 mb-2 text">
                  {study.description}
                </p>
              </div>

              {hoveredCard === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                  <a
                    href={`/case-studies/${study.id}`}
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                  >
                    View Details
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
