import { useParams } from "react-router-dom";
import ServiceSidebar from "../../components/Sidebars/ServiceSidebar";
import PostSidebar from "../../components/Sidebars/PostSidebar";
import useGetData from "../../api/api";

const Details = () => {
  const { id } = useParams();
  const { services } = useGetData();

  const service = services.find((s) => s.id === id); // Using Number(id)

  // Set fixed width and height for images and text
  const imageStyles = {
    width: "90%", // Use '100%' to take full width of the container
    height: "500px", // Set a fixed height (adjust as necessary)
    objectFit: "cover", // This will maintain the aspect ratio and cover the container
    borderRadius: "8px",
    marginBottom: "20px",
  };

  const paragraphStyles = {
    fontSize: "20px",
    lineHeight: "1.2",
    color: "#333",
    marginBottom: "20px",
    maxWidth: "90%",
    height: "500px", // Set height to match the image
    overflowY: "auto", // Allow scrolling if the text exceeds the height
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="col-lg-12 col-md-12 order-lg-2 order-1"
        style={{ display: "flex" }}
      >
        {/* Sidebar */}
        <div className="w-[30%] px-4 mr-14 flex flex-col">
          {" "}
          {/* Changed to flex-col to match post layout */}
          <div className="mb-20 flex-grow">
            {" "}
            {/* Added flex-grow to take remaining space */}
            <ServiceSidebar />
          </div>
          <div className="mb-20 flex-grow">
            {" "}
            {/* Added flex-grow to take remaining space */}
            <PostSidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className="details-content"
          style={{
            width: "70%", // Increased width to extend by 200px
            padding: "20px",
            maxWidth: "1400px", // Set a max width to prevent it from growing too large
          }}
        >
          {service ? (
            <div className="service-details">
              <img
                src={`https://test.uzloyal.uz/api/uploads/images/${service.image_src}`}
                alt={service.title_en || "Service Image"} // Ensure to provide a fallback for alt text
                style={imageStyles} // Apply the image styles
              />
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {service.title_en}
              </h2>
              <div style={{ width: "100%" }}>
                <p style={paragraphStyles}>{service.text_en}</p>
              </div>
            </div>
          ) : (
            <p>Service not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
