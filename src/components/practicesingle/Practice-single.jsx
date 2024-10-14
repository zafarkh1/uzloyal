import React from "react";
import { useParams } from "react-router-dom";

const Practicesingle = () => {
  const { id } = useParams();
  console.log(id);
  return <div>salom Kamoliddin {id}</div>;
};

export default Practicesingle;
