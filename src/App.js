import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import News from "./pages/News";
import Practicesingle from "./components/practicesingle/Practice-single";
import Documents from "./pages/Documents";
import Category from "./components/category/Category";
import Library from "./pages/Library";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/practice-single/:id" element={<Practicesingle />} />
        <Route path="/resources" element={<Documents />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/library" element={<Library />} />
      </Route>
    </Routes>
  );
}

export default App;
