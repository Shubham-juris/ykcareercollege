import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
// import ShopPage from "../pages/ShopPage";
import PagesPage from "../pages/PagesPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      {/* <Route path="/shop" element={<ShopPage />} /> */}
      <Route path="/pages" element={<PagesPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
