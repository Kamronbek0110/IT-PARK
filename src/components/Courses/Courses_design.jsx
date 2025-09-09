import Courses_item from "./Courses_item";

export default function Courses_design() {
	return (
    <>
      <Courses_item
        name="Grafik Dizayn"
        img="./courses/Design/1.jpg"
        desc="Photoshop va Illustrator yordamida professional dizaynlar tayyorlashni o‘rganasiz."
      />
      <Courses_item
        name="3D max"
        img="./courses/Design/2.jpg"
        desc="3D modellashtirish va animatsiya yaratishni 3ds Max dasturida o‘zlashtirasiz."
      />
    </>
  );
}
