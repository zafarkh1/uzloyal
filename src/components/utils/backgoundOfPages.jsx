export const BackgroundofPages = ({ heading, text }) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center lg:h-80 h-48 flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/assets/page-bg.jpg)",
      }}
    >
      <div className="myContainer text-white">
        <h2 className="heading2 mb-8">{heading}</h2>
        <h5 className="heading5">
          Home - <span className="text-blue-400">{text}</span>
        </h5>
      </div>
    </div>
  );
};
