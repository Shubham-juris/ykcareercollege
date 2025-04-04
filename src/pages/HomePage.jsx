import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import CourseCategories from "../components/home/CourseCategories";
import FeaturedCourses from "../components/home/FeaturedCourses";
import Testimonial from "../components/home/Testimonial";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CourseCategories />
      <FeaturedCourses />
      <Testimonial />
    </div>
  );
}
