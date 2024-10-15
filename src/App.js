import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Details from "./pages/Details/Details";
import NewPosts from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import Documents from "./pages/Documents";
import Category from "./components/category/Category";
import Library from "./pages/Library";
import Blogs from "./pages/Blog/Blogs";
import BlogDetails from "./pages/Blog/BlogDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<NewPosts />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/newsdetails/:id" element={<NewsDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/resources" element={<Documents />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/library" element={<Library />} />
      </Route>
    </Routes>
  );
}

export default App;
