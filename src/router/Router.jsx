import { Routes, Route,Link } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
// import ShopPage from "../pages/ShopPage";
import TeamPage from "../pages/TeamPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      {/* <Route path="/shop" element={<ShopPage />} /> */}
      <Route path="/teams" element={<TeamPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
