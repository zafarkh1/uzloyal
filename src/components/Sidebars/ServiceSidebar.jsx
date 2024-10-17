import { useNavigate } from "react-router-dom";
import useGetData from "../../api/api";

const ServiceSidebar = () => {
  const navigate = useNavigate();
  const { services } = useGetData();

  return (
    <div className="bg-gray-100 lg:p-8 sm:p-6 p-4 rounded-lg shadow-md">
      {/* Blog sidebar container */}
      <div className="widget category-widget">
        <h3 className="heading5 sm:mb-6 mb-3">Services</h3>
        <ul className="space-y-3">
          {/* List of services */}
          {services.slice(0, 9).map((service) => (
            <li
              key={service.id}
              className="hover:bg-[#cdb091] hover:text-white cursor-pointer bg-white sm:p-4 p-2 text rounded-lg"
              onClick={() => {
                navigate(`/servicedetails/${service.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <span className="mr-2">&gt;&gt;</span>
              {service.title_en}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebar;
