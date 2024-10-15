import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../api/api";
import { DocsIcon } from "../../assets/icons";

const Category = () => {
  const { id } = useParams();
  const { sources } = useGetData();

  const findDocuments = sources.filter((item) => item.category_id === +id);

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
