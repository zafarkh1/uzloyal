import React from 'react';

const CaseDetails = () => {
  return (
    <div className="flex flex-wrap">
      <div className="lg:w-1/3 md:w-full w-full p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Case Details</h3>
          <ul className="space-y-2">
            <li>
              Client: <span className="font-medium">Cameron Williamson</span>
            </li>
            <li>
              Attorney: <span className="font-medium">Darlene Robertson</span>
            </li>
            <li>
              Case: <span className="font-medium">Criminal Law</span>
            </li>
            <li>
              Case Start: <span className="font-medium">12/04/2023</span>
            </li>
            <li>
              Execution Time: <span className="font-medium">5 Months</span>
            </li>
            <li>
              Result: <span className="font-medium">Winner</span>
            </li>
            <li>
              Other: <span className="font-medium">Demo Content</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-2/3 md:w-full w-full p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Summary Of The Case Studies</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus morbi turpis ipsum cursus
            tempor elementum lacus. Mi ipsum, sed vel ultricies. Pellentesque sit tortor eu proin at
            commodo. Penatibus eu sed at tincidunt fermentum id nulla sed. Et nunc massa nam fringilla.
            In eros, proin purus, auctor arcu ultricies elit semper lobortis. Tristique dignissim
            convallis lectus morbi faucibus. Amet vel faucibus risus eget ante lectus faucibus. Bibendum
            vitae tortor at risus. Odio proin dictum tellus consectetur nisi egiat tellus augue orci
            nunc et sapien in. Neque at non vel tellus. Tellus urna sit dignissim amet. Lectus tortor at
            ultricies massa tortor, hac vitae curabitur varius.
          </p>
          <p>
            Fusce etiam maecenas morbi nulla metus commodo, blandit est. Lacinia congue ipsum vitae in
            eget et. Eros, elit imperdiet ultrices suspendisse tellus praesent massa. Platea eros,
            dignissim magna consequat pellentesque. Suspendisse sed semper aenean proin gravida morbi
            convallis pretium velit. Sagittis risus, ut congue pellentesque posuere morbi vestibulum
            integer. Erat ut faucibus sollicitudin viverra egestas phasellus tristique. Nec enim tempus,
            placerat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
