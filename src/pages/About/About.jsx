import AboutChoose from "./AboutChoose";
import Services from "../Services";
import AboutSlider from "./Slider";
import Gallery from "./Gallery";
import Stats from "../../components/Home/Stats";
import Experts from "./Experts";

function About(props) {
  return (
    <div className="mt-52">
      {/*     Background image    */}
      <div
        className="bg-cover bg-no-repeat bg-center h-60 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/assets/page-bg.jpg)",
        }}
      >
        <div className="myContainer text-white">
          <h2 className="heading2 mb-8">Latest Articles</h2>
          <h5 className="heading5">
            Home - <span className="text-blue-400">Our publications</span>
          </h5>
        </div>
      </div>

      <div className="myContainer my-10">
        <AboutChoose />
        <div className="text-center my-10">
          <p className="heading5 text-[#cdb091]">How Can We Assist You?</p>
          <h5 className="heading2 my-3">Legal Practice Areas</h5>
          <p className="w-24 h-[1px] mx-auto bg-[#cdb091]"></p>
        </div>
        <Services />
        <AboutSlider />
        <Gallery />
        <div className="stats-full-width">
          <Stats />
        </div>
        <Experts />
      </div>
    </div>
  );
}

export default About;
