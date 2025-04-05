import CommonHero from "../components/common/CommonHero";
import CoursCourses from "../components/course/CourseCourses";

export default function CoursesPage() {
  return (
    <>
      <CommonHero head={"Archives: Courses"} />
      <CoursCourses />
    </>
  );
}
