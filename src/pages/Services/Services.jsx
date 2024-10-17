import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import Cards from "./ServiceCards";

const Services = () => {
  return (
    <div className="lg:mt-48 sm:mt-32 mt-24 lg:mb-10 mb-4">
      <BackgroundofPages heading={"Legal Practice Areas"} text={"Services"} />
      <div className="myContainer mt-10">
        <Cards />
      </div>
    </div>
  );
};

export default Services;
