import AboutChoose from "./AboutChoose";
import AboutSlider from "./Slider";
import CaseStudies from "./CaseStudies";
import Stats from "../../components/Home/Stats";
import Experts from "./Experts";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";
import Cards from "../Services/ServiceCards";

function About(props) {
  return (
    <div className="lg:mt-48 sm:mt-32 mt-24">
      {/*     Background image    */}
      <BackgroundofPages heading={"About Us"} text={"Why Choose Us"} />

      <div className="myContainer lg:my-10 my-4">
        <AboutChoose />
        <div className="text-center lg:my-10 my-6">
          <p className="heading5 text-[#cdb091]">How Can We Assist You?</p>
          <h5 className="heading2 lg:my-3 my-1">Legal Practice Areas</h5>
          <p className="w-24 h-[1px] mx-auto bg-[#cdb091] hidden md:inline-block"></p>
        </div>
        <Cards />
        <AboutSlider />
        <CaseStudies />

        <div className="stats-full-width lg:mt-0 mt-14">
          <Stats />
        </div>
        <Experts />
      </div>
    </div>
  );
}

export default About;
