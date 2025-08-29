import Courses_design from "./Courses_design";
import Courses_language from "./Courses_language";
import Courses_program from "./Courses_program";

export default function Courses_all() {
  return (
    <>
      <Courses_program />
      <Courses_design />
      <Courses_language />
    </>
  );
}
