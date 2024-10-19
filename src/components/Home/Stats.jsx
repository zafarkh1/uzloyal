import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

function Stats() {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      title: t("stats.title1"),
      number: 150,
    },
    {
      id: 2,
      title: t("stats.title2"),
      number: 95,
    },
    {
      id: 3,
      title: t("stats.title3"),
      number: 20,
    },
  ];

  return (
    <div className="lg:shadow-lg shadow-md shadow-black lg:my-10 my-4">
      <div className="myContainer">
        <div className="grid grid-cols-3 lg:my-6 sm:my-3">
          {items.map((item) => (
            <div
              className="flex lg:flex-row flex-col items-center justify-center lg:gap-4 gap-2"
              key={item.id}
            >
              <h2 className="lg:text-5xl sm:text-3xl text-2xl font-bold">
                <CountUp start={0} end={item.number} />+
              </h2>
              <h5 className="lg:text-2xl sm:text-base text-sm font-medium lg:w-20">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
