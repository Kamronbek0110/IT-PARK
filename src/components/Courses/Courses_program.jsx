import Courses_item from "./Courses_item";

export default function Courses_program() {
	return (
    <>
      <Courses_item
        name="Frontend"
        img="./courses/IT/2.jpg"
        desc="Veb-sahifalarni HTML, CSS va JavaScript, React orqali yaratishni o‘rganasiz."
      />
      <Courses_item
        name="Backend"
        img="./courses/IT/1.jpeg"
        desc="Server tomoni dasturlash, ma’lumotlar bazasi bilan ishlash va API yaratishni o‘rganasiz."
      />
      <Courses_item
        name="Kompyuter savodxonligi"
        img="./courses/IT/3.jpg"
        desc="Kompyuter asoslari, Microsoft officelari va internetdan foydalanishni o‘rganasiz."
      />
    </>
  );
}
