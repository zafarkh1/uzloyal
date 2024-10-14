import React from "react";
import { useParams } from "react-router-dom";
// import useGetData from "../../api/api";

const Practicesingle = () => {
  const { id } = useParams();
  //   const { services } = useGetData();
  //   const foundItem = services.find((item) => item.id == id);
  return (
    <div className="max-w-[1320px] mx-auto my-10 w-full">
      <h1>{id}</h1>
    </div>
  );
};

export default Practicesingle;
