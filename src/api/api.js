import { useEffect, useState } from "react";

const baseUrl = "https://test.uzloyal.uz/api";

const useGetData = () => {
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    Promise.all([fetch(`${baseUrl}/services`), fetch(`${baseUrl}/news`)])
      .then(([resServices, resNews]) => {
        return Promise.all([resServices.json(), resNews.json()]);
      })
      .then(([dataServices, dataNews]) => {
        setServices(dataServices.data);
        setNews(dataNews.data);
      });
  }, []);

  return { services, news };
};

export default useGetData;
