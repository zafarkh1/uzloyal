import React from "react";
import CountUp from "react-countup";

function Stats(props) {
  return (
    <div className="shadow-lg shadow-black my-10">
      <div className="myContainer grid grid-cols-3">
        <div className="flex lg:flex-row flex-col items-center gap-4">
          <h2 className="lg:text-5xl font-bold">
            <CountUp start={0} end={150} />+
          </h2>
          <h5 className="heading5 w-20">Trusted Clients</h5>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-4">
          <h2 className="lg:text-5xl font-bold">
            <CountUp start={0} end={95} />%
          </h2>
          <h5 className="heading5 w-20">Case won</h5>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-4">
          <h2 className="lg:text-5xl font-bold">
            <CountUp start={0} end={20} />+
          </h2>
          <h5 className="heading5 w-20">Lawers</h5>
        </div>
      </div>
    </div>
  );
}

export default Stats;
