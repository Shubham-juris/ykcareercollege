import AboutSection from "../home/AboutSection";
import HeroSection from "../home/HeroSection";
import CourseCategories from "../home/CourseCategories";
import FeaturedCourses from "../home/FeaturedCourses";
import Testimonial from "../home/Testimonial";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CourseCategories />
      <FeaturedCourses />
      <Testimonial />
    </>
  );
}
