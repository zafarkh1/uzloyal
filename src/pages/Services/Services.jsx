import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import Cards from "./ServiceCards";

const Services = () => {
  return (
    <div className="mt-52 mb-10">
      <BackgroundofPages heading={"Legal Practice Areas"} text={"Services"} />
      <div className="myContainer">
        <Cards />
      </div>
    </div>
  );
};

export default Services;
