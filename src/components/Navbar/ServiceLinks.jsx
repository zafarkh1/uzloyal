import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ServiceLinks.css'; // For custom styles

const services = [
  { id: 1, title: 'корпоративные споры' },
  { id: 2, title: 'открываем торговый дом, представительство или компанию' },
  { id: 3, title: 'Защита по экономическим преступлениям' },
  { id: 4, title: 'Наследственные дела и споры' },
  { id: 5, title: 'налоговые споры' },
  { id: 6, title: 'лизинговые споры' },
  { id: 7, title: 'споры в сфере защиты интеллектуальной собственности' },
  { id: 8, title: 'Правовая экспертиза договоров' },
  { id: 9, title: 'оформление разрешительных процедур на иностранного работника' },
  { id: 10, title: 'споры по защите чести, достоинства и деловой репутации' },
  { id: 11, title: 'Признание и привидение решение иностранных судов' },
  { id: 12, title: 'регистрация реорганизация и ликвидация' },
  { id: 13, title: 'комплекскное юридичечкое сопроваждение бизнеса' },
  { id: 14, title: 'due diligence' },
  { id: 15, title: 'медиация' },
  { id: 16, title: 'споры в банковском секторе' },
  { id: 17, title: 'споры в сфере банкротства' },
  { id: 18, title: 'таможенные споры' },
  { id: 19, title: 'споры в сфере страхования' },
];

const ServiceLinks = () => {
  return (
    <ul className="service-grid">
      {services.map((service) => (
        <li 
          key={service.id} 
          className="service-item hover:bg-gray-200 transition-colors duration-200 p-2"
        >
          <Link 
            to={`/details/${service.id}`} 
            className="text-black block text-center"
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceLinks;
