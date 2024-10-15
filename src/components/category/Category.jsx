import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../api/api";
import { DocsIcon } from "../../assets/icons";

const Category = () => {
  const { id } = useParams();
  const { services } = useGetData();
  const { sources } = useGetData();
  const { news } = useGetData();
  const { blogs } = useGetData();
  const { faqs } = useGetData();

  console.log(services, "services");
  console.log(sources, "sources");
  console.log(news, "news");
  console.log(blogs, "blogs");
  console.log(faqs, "faqs");

  const findDocuments = sources.filter((item) => item.category_id === +id);
  console.log(findDocuments, "salom");

  return (
    <div className="max-w-[1320px] mx-auto py-10">
      <h1 className="text-[19px] text-[#1e2e3e] mb-3">
        БОШҚА ФУҚАРОЛИК НИЗОЛАРИ БЎЙИЧА АРИЗАЛАР
      </h1>
      {findDocuments.map((item) => (
        <div key={item.id} className="flex gap-3 items-center px-4 py-2">
          <DocsIcon />
          <a
            download
            href={`https://test.uzloyal.uz/api/uploads/images/${item.src}`}
          >
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Category;
