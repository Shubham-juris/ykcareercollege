import AboutSection from "../components/home/AboutSection.jsx";
import AboutFeature from "../components/about/AboutFeature.jsx";
import AboutStatic from "../components/about/AboutStatic.jsx";
import AboutWorkshop from "../components/about/AboutWorkshop.jsx";
import CommonHero from "../components/common/CommonHero.jsx";

export default function AboutPage() {
  return (
    <>
      <CommonHero head={"About Us One"} />
      <AboutSection />
      <AboutStatic />
      <AboutFeature />
      <AboutWorkshop />
    </>
  );
}
