import React from "react";
import CaseStudies from "./caseStudies2";
import CaseDetails from "./caseDetails";
import CaseAttorney from "./CaseAttorney";
import CaseInfo from "./CaseInfo";
import { BackgroundofPages } from "../../components/utils/backgoundOfPages";

function CaseStudyDetails() {
  return (
    <div className="lg:mt-48 sm:mt-32 mt-24">
      {/*     Background image    */}
      <BackgroundofPages
        heading={"Latest Articles"}
        text={"Our publications"}
      />

      <section className="myContainer lg:my-10 sm:my-6 my-2">
        <div>
          <div className="text-center">
            <h3 className="heading3 lg:mb-4 sm:mb-2">
              A Personal Injury Suit Can Arise When Someone Is Harmedd
            </h3>
            <span className="text-gray-600 text">
              Case Study, Insurance Law, Law Firm
            </span>
          </div>
          <div className="mb-6">
            <img
              src="/assets/services/service13.jpeg"
              alt="Personal Injury Case Study"
              className="w-full h-96 object-cover rounded-lg lg:my-10 sm:my-6 my-3"
            />
          </div>
          {/* Include other case components here */}
          <CaseDetails />
          <CaseInfo />
          <CaseAttorney />
          <CaseStudies />
        </div>
      </section>
    </div>
  );
}

export default CaseStudyDetails;
