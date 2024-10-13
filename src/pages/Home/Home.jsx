import Article from "./Articl";
import ServiceCard from "./ServiceCard";
import Stats from "./Stats";

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
