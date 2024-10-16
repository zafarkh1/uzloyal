import { Link } from "react-router-dom"; // Use Link instead of anchor for client-side routing
import { services } from "../components/Sidebars/ServiceDatas";

const Services = () => {
  // Get the first 6 services
  const firstSixServices = services.slice(0, 6);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-60">
      {firstSixServices.map((service) => (
        <div
          key={service.id}
          className="flex flex-col bg-white rounded-lg shadow-2xl"
        >
          <div className="flex flex-col items-center p-4">
            <img
              src={service.imgSrc || "default-image-url.jpg"} // Add a fallback image URL
              alt={service.alt || "Service Image"} // Fallback alt text
              style={{
                height: "220px",
                width: "90%",
                objectFit: "cover",
                marginTop: "10px",
              }}
            />
            <Link
              to={`/details/${service.id}`} // Dynamically pass the ID
              className="mt-4 text-xl font-medium text-center text-black hover:text-gold transition-colors duration-300"
            >
              {service.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
