import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import News from "./pages/News";
import Practicesingle from "./components/practicesingle/Practice-single";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/practice-single/:id" element={<Practicesingle />} />
      </Route>
    </Routes>
  );
}

export default App;
