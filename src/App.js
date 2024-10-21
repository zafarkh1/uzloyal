import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cases from "./pages/About/CaseStudies";
import CaseDetails from "./pages/About/CaseStudyDetails";
import AttorneyDetails from "./pages/About/AttorneyDetails";
import Services from "./pages/Services/Services";
import NewPosts from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import Documents from "./pages/Documents";
import Category from "./components/category/Category";
import Library from "./pages/Library";
import Blogs from "./pages/Blog/Blogs";
import BlogDetails from "./pages/Blog/BlogDetails";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/Services/ServicDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<NewPosts />} />
        <Route path="/servicedetails/:id" element={<ServiceDetails />} />
        <Route path="/newsdetails/:id" element={<NewsDetails />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/case-studies/:id" element={<CaseDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/attorneydetails" element={<AttorneyDetails />} />
        <Route path="/resources" element={<Documents />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
