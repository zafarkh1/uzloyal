import { useEffect, useState } from "react";

const baseUrl = "https://test.uzloyal.uz/api";

const useGetData = () => {
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`${baseUrl}/services`),
      fetch(`${baseUrl}/news`),
      fetch(`${baseUrl}/blogs`),
    ])
      .then(([resServices, resNews, resBlogs]) => {
        return Promise.all([
          resServices.json(),
          resNews.json(),
          resBlogs.json(),
        ]);
      })
      .then(([dataServices, dataNews, dataBlogs]) => {
        setServices(dataServices.data);
        setNews(dataNews.data);
        setBlogs(dataBlogs.data);
      });
  }, []);

  return { services, news, blogs };
};

export default useGetData;
