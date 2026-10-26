import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Sponsor from "./pages/Sponsor";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rules" element={<Rules />} />
        <Route path="sponsor" element={<Sponsor />} />
        <Route path="apply" element={<Apply />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
