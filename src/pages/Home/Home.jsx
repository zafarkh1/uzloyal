import Stats from "../../components/Home/Stats";
import AboutChoose from "../About/AboutChoose";
import Article from "./Article";
import LatestNews from "./LatestNews";
import ServiceCard from "./ServiceCard";

function Home(props) {
  return (
    <div className="myContainer min-h-64 lg:mt-56 mt-36">
      <ServiceCard />
      <div className="stats-full-width">
        <Stats />
      </div>
      <Article />
      <AboutChoose />
      <LatestNews />
    </div>
  );
}

export default Home;
