import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Details from "./pages/Details/Details";
import NewPosts from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import Posts from "./pages/Posts/Posts";
import PostsDetails from "./pages/Posts/PostsDetails";
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
        <Route path="/posts" element={<Posts />} />
        <Route path="/postdetails/:id" element={<PostsDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
