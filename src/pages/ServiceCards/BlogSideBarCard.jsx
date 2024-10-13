import React from 'react';
import './BlogSidebarCard.css'; // Import the CSS for styling

const BlogSidebarCard = () => {
  return (
    <div className="col col-lg-4 col-12">
      <div className="blog-sidebar">
        <div className="widget category-widget">
          <h3>Услуги</h3>
          <ul>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/b37bdbad-227c-4d0e-9ee8-c203d57a921f">корпоративные споры</a>
            </li>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/197928f2-9cdc-427b-b3d8-360577d83eda">открываем торговый дом, представительство или компанию</a>
            </li>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/9156cd23-e9f4-4cfc-af16-dc9b7bd02ea1">Защита по экономическим преступлениям</a>
            </li>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/f06cac5d-49bf-4366-a25d-8490d38a6146">Наследственные дела и споры</a>
            </li>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/df637b3b-b7be-4d32-8264-e5dcf8d7ef01">налоговые споры</a>
            </li>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/47636359-2054-49c1-aee7-e8ab11de6395">лизинговые споры</a>
            </li>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/886aa0f9-8b1b-485c-89ad-6c0130c17276">споры в сфере защиты интеллектуальной собственности</a>
            </li>
            <li>
              <span className="list-icon"> &gt;&gt; </span>
              <a href="/practice-single/4b6919e4-9ef6-41cd-a9de-d286fea21725">Правовая экспертиза договоров</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebarCard;
