const CaseAttorney = () => {
  return (
    <div className="lg:my-14">
      <h3 className="heading3 lg:mb-10 sm:mb-4 mb-2 sm:text-left text-center">
        Attorney In This Case:
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4">
        {/* Image section */}
        <div className="col-span-1">
          <img
            src="/assets/services/service4.jpeg"
            alt="Portrait of Attorney Darlene Robertson"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text section */}
        <div className="col-span-2">
          <h5 className="heading5 sm:text-left text-center">
            Darlene Robertson
          </h5>
          <span className="text-gray-600 text sm:text-left text-center">
            Lawyer, Consultant
          </span>
          <p className="mt-2 text text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            andient accumsan et nunc euoro vel dignissim. Eleifend elit, proin
            aliquet gravida eleifend aenean blandit commodo. Ut lobortis neque
            turpis quis. Massa ut elementum dui nisl vehicula platea sem. Quam
            scelerisque leo in volutpat, consequat. Morbi donec sit tortor
            sagittis. Enim a sed pellentesque nisi, lacus, fringilla lacus porta
            eros amet platea iaculis ferntum.
          </p>
          <a
            href="/attorneydetails"
            className="inline-flex items-center mt-4 text-blue-600 hover:underline"
          >
            More About <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseAttorney;
