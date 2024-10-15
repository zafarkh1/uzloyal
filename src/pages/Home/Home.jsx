import Stats from "../../components/Home/Stats";
import Article from "./Article";
import ServiceCard from "./ServiceCard";

function Home(props) {
  return (
    <div className="myContainer min-h-64">
      <ServiceCard />
      <div className="stats-full-width">
        <Stats />
      </div>
      <Article />
    </div>
  );
}

export default Home;
