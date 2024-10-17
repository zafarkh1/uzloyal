import React, { useState } from 'react';

function Cases() {
    const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card

    const caseStudies = [
        { id: 1, title: 'Case Study 1', description: 'Brief description of the case study.', img: '/assets/cases/criminal.jfif' },
        { id: 2, title: 'Case Study 2', description: 'Brief description of the case study.', img: '/assets/cases/family.jfif' },
        { id: 3, title: 'Case Study 3', description: 'Brief description of the case study.', img: '/assets/cases/business.jfif' },
        
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Case Studies</h2>
                    <p className="text-lg text-gray-600">See how we've helped clients achieve their goals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.id}
                            className="relative bg-white rounded-lg shadow-md overflow-hidden"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img className="w-full h-48 object-cover" src={study.img} alt={study.title} />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{study.title}</h3>
                                <p className="text-gray-600 mb-4">{study.description}</p>
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
