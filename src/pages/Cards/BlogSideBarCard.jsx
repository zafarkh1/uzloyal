import React from 'react';

const BlogSidebarCard = () => {
  return (
    <div className="col col-lg-4 col-12">
      <div className="bg-gray-100 p-5 rounded-lg shadow-md"> {/* Blog sidebar container */}
        <div className="widget category-widget">
          <h3 className="text-2xl mb-4 mt-6">Услуги</h3> {/* Title */}
          <ul className="space-y-3"> {/* List of services */}
            {services.map((service) => (
              <li 
                key={service.id} 
                className="border-b border-gray-300 pb-8 flex items-center hover:bg-[#CCCC00] transition duration-200" // Added hover effect
              >
                <a 
                  href={`/details/${service.id}`}  // Update to use dynamic id
                  className="text-blue-500 hover:underline hover:text-[#DCDCDC]"
                >
                  <span className="mr-2">&gt;&gt;</span> {/* Icon */}
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Sample data for services (you can replace this with your actual data)
const services = [
  { id: 1, title: 'корпоративные споры' },
  { id: 2, title: 'открываем торговый дом, представительство или компанию' },
  { id: 3, title: 'Защита по экономическим преступлениям' },
  { id: 4, title: 'Наследственные дела и споры' },
  { id: 5, title: 'налоговые споры' },
  { id: 6, title: 'лизинговые споры' },
  { id: 7, title: 'споры в сфере защиты интеллектуальной собственности' },
  { id: 8, title: 'Правовая экспертиза договоров' },
];

export default BlogSidebarCard;
