function AboutChoose(props) {
  return (
    <div className="mb-20">
      <div className="text-center">
        <p className="heading5 text-[#cdb091]">About Us</p>
        <h5 className="heading2 my-3">Why Choose Us?</h5>
        <p className="w-24 h-[1px] mx-auto bg-[#cdb091]"></p>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-16 my-10">
        <div className="lg:w-1/2">
          <h2 className="lg:text-4xl font-semibold lg:leading-normal">
            We are the best legal firm that can provide you with comprehensive
            assistance!
          </h2>
          <p className="lg:text-xl lg:leading-10 mt-10">
            Law Firm 'LOYAL' provides professional legal services to businesses
            (private entrepreneurs, companies and firms, LLCs, PJSCs,
            organizations of all forms of ownership) throughout the Republic of
            Uzbekistan. By contacting the LOYAL law office, you can count on
            qualified prompt assistance in protecting your rights and complete
            confidentiality of the information provided. You can always be sure
            that your case is being handled by a professional who specializes in
            providing legal services to businesses, has sufficient knowledge and
            experience in this area, is equally well versed in economics and
            law, and knows all the intricacies of organizing and running a
            business.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="/assets/about-1.jpg" alt="about" />
        </div>
      </div>
    </div>
  );
}

export default AboutChoose;
