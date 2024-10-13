import React, { useEffect, useState } from "react";
// https://test.uzloyal.uz/api/services

const About = () => {
  const [aboutdata, setAboutData] = useState([]);
  const getData = () => {
    fetch("https://test.uzloyal.uz/api/services")
      .then((jsondata) => jsondata.json())
      .then((respons) => {
        setAboutData(respons.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {aboutdata?.map((value, index) => (
        <div key={index}>aaa{value.text_uz}</div>
      ))}
    </div>
  );
};

export default About;
