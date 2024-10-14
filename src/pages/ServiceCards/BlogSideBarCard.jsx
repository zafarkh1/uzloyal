import React from 'react';

const BlogSidebarCard = () => {
  return (
    <div className="col col-lg-4 col-12">
      <div className="bg-gray-100 p-5 rounded-lg shadow-md"> {/* Blog sidebar container */}
        <div className="widget category-widget">
          <h3 className="text-2xl mb-4">Услуги</h3> {/* Title */}
          <ul className="space-y-3"> {/* List of services */}
            {services.map((service) => (
              <li 
                key={service.id} 
                className="border-b border-gray-300 pb-8 flex items-center   hover:bg-[#CCCC00] transition duration-200" // Added hover effect
              >
                
                <a 
                  href={service.link} 
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
  { id: 1, title: 'корпоративные споры', link: '/practice-single/b37bdbad-227c-4d0e-9ee8-c203d57a921f' },
  { id: 2, title: 'открываем торговый дом, представительство или компанию', link: '/practice-single/197928f2-9cdc-427b-b3d8-360577d83eda' },
  { id: 3, title: 'Защита по экономическим преступлениям', link: '/practice-single/9156cd23-e9f4-4cfc-af16-dc9b7bd02ea1' },
  { id: 4, title: 'Наследственные дела и споры', link: '/practice-single/f06cac5d-49bf-4366-a25d-8490d38a6146' },
  { id: 5, title: 'налоговые споры', link: '/practice-single/df637b3b-b7be-4d32-8264-e5dcf8d7ef01' },
  { id: 6, title: 'лизинговые споры', link: '/practice-single/47636359-2054-49c1-aee7-e8ab11de6395' },
  { id: 7, title: 'споры в сфере защиты интеллектуальной собственности', link: '/practice-single/886aa0f9-8b1b-485c-89ad-6c0130c17276' },
  { id: 8, title: 'Правовая экспертиза договоров', link: '/practice-single/4b6919e4-9ef6-41cd-a9de-d286fea21725' },
];

export default BlogSidebarCard;