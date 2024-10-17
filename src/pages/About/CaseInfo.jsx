import React from 'react';

const CaseInfo = () => {
  return (
    <div className="case-info-wrap">
      <div className="flex flex-wrap">
        {/* Challenge Of Cases Section */}
        <div className="lg:w-1/3 md:w-full w-full p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Challenge Of Cases</h3>
            <p className="mb-2">
              The types of damages that can be claimed in a personal injury suit. Here is a run down of
              some common types of damages:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Lost wages as a result of the injury</li>
              <li>Suspendisse sed semper aenean proin</li>
              <li>Pain and suffering</li>
              <li>Erat ut faucibus sollicitudin viverra egestas</li>
              <li>Compensation for medical bills accrued</li>
            </ul>
          </div>
        </div>

        {/* Our Approach And Solution Section */}
        <div className="lg:w-1/3 md:w-full w-full p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Approach And Solution</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus elit dictumst purus cras
              etiam neque. Varius augue sollicitudin et proin elementum sed est orci. Mi aliquet neque
              dis elit feugiat sed. Ultrices sit diam viverra blandit volutpat mauris. Vitae vestibulum
              ipsum porta auctor orci. Tortor nec libero magna cursus urna rhoncus. Egestas eu eget sed
              amet aliquet. Tincidunt feugiat pretium varius semper sodales integer. Habitant faucibus
              quis tempus, amet, in nisl in neque, neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Final Result Section */}
        <div className="lg:w-1/3 md:w-full w-full p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Final Result</h3>
            <img 
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..." // valid base64 string here
                          alt="Portrait of Attorney Darlene Robertson" // Updated alt text
                          className="w-full h-auto mb-4" // Optional: Add classes for responsive styling
                      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseInfo;
