import Stats from "../../components/Home/Stats";
import AboutChoose from "../About/AboutChoose";
import Article from "./Article";
import LatestNews from "./LatestNews";
import ServiceCard from "./ServiceCard";
import Consultation from "./Consultation";

function Home(props) {
  return (
    <div className="myContainer min-h-64 lg:mt-56 sm:mt-40 mt-32">
      <ServiceCard />
      <div className="stats-full-width">
        <Stats />
      </div>
      <Article />
      <AboutChoose />
      <LatestNews />
      <Consultation/>
    </div>
  );
}

export default Home;
