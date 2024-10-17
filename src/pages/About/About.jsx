import AboutChoose from "./AboutChoose";
import AboutSlider from "./Slider";
import Gallery from "./Gallery";
import CaseStudies from "./CaseStudies";
import Stats from "../../components/Home/Stats";
import Experts from "./Experts";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import Cards from "../Services/ServiceCards";

function About(props) {
  return (
    <div className="mt-52">
      {/*     Background image    */}
      <BackgroundofPages heading={"About Us"} text={"Why Choose Us"} />

      <div className="myContainer my-10">
        <AboutChoose />
        <div className="text-center my-10">
          <p className="heading5 text-[#cdb091]">How Can We Assist You?</p>
          <h5 className="heading2 my-3">Legal Practice Areas</h5>
          <p className="w-24 h-[1px] mx-auto bg-[#cdb091]"></p>
        </div>
        <Cards />
        <AboutSlider />
        <Gallery />
        <CaseStudies />


        <div className="stats-full-width">
          <Stats />
        </div>
        <Experts />
      </div>
    </div>
  );
}

export default About;
