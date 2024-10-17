const CaseAttorney = () => {
  return (
      <div className="case-attorney">
          <h3>Attorney In This Case:</h3>
          <div className="case-attorney-wrap">
              <div className="flex items-center">
                  {/* Image section */}
                  <div className="lg:w-5/12 w-full">
                      <div className="case-attorney-img">
                          <img 
                              src="data:image/jpeg;base64,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" 
                              alt="Portrait of Attorney Darlene Robertson" 
                              className="w-full h-auto" // Responsive image
                          />
                      </div>
                  </div>

                  {/* Text section */}
                  <div className="lg:w-7/12 w-full">
                      <div className="case-text">
                          <h4>Darlene Robertson</h4>
                          <span className="block text-gray-600">Lawyer, Consultant</span>
                          <p className="mt-2 text-gray-700">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna andient accumsan et nunc euoro vel dignissim. Eleifend elit, proin aliquet gravida eleifend aenean blandit commodo. Ut lobortis neque turpis quis. Massa ut elementum dui nisl vehicula platea sem. Quam scelerisque leo in volutpat, consequat. Morbi donec sit tortor sagittis. Enim a sed pellentesque nisi, lacus, fringilla lacus porta eros amet platea iaculis ferntum.
                          </p>
                          <a 
                              href="/attorneydetails" 
                              className="inline-flex items-center mt-4 text-blue-600 hover:underline"
                          >
                              More About <i className="fi flaticon-031-right-arrow-1"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default CaseAttorney;
