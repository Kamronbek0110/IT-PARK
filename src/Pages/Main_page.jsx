import {
  ArrowUpRight,
  BookOpenText,
  CalendarCog,
  ChartNoAxesCombined,
  ChevronDown,
  ChevronUp,
  Facebook,
  GraduationCap,
  Handshake,
  Instagram,
  Laptop,
  LaptopMinimal,
  Mail,
  MapPin,
  Phone,
  UsersRound,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  Outlet,
} from "react-router-dom";
import Typed from "typed.js";
import Header from "../components/Header";
import Services_item from "../components/Services_item";
import Courses_all from "../components/Courses/Courses_all";
import Courses_design from "../components/Courses/Courses_design";
import Courses_language from "../components/Courses/Courses_language";
import Courses_program from "../components/Courses/Courses_program";
import Footer from "../components/Footer";
export default function Main_page() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);
  const [success1, setSuccess1] = useState(false);
  const formRef1 = useRef(null);

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const form = formRef1.current;
    const requiredInputs = form.querySelectorAll(
      "input[required], textarea[required]"
    );
    for (let input of requiredInputs) {
      if (!input.value.trim()) {
        input.focus();
        input.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }
    }
    const formData = new FormData(form);
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/zayniddinovkamronbek668@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (res.ok) {
        setSuccess1(true);
        form.reset();
      }
    } catch (err) {}
  };
 const handleSubmit = async (e) => {
   e.preventDefault();
   const form = formRef.current;
   const requiredInputs = form.querySelectorAll(
     "input[required], textarea[required]"
   );
   for (let input of requiredInputs) {
     if (!input.value.trim()) {
       input.focus();
       input.scrollIntoView({
         behavior: "smooth",
         block: "center",
       });
       return;
     }
   }
   const formData = new FormData(form);
   try {
     const res = await fetch(
       "https://formsubmit.co/ajax/zayniddinovkamronbek668@gmail.com",
       {
         method: "POST",
         body: formData,
         headers: {
           Accept: "application/json",
         },
       }
     );
     if (res.ok) {
       setSuccess(true);
       form.reset();
     }
   } catch (err) {}
 };
  let [isModalOpen, setIsModalOpen] = useState(false);
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "dasturlash",
        "grafik dizayn",
        "sun’iy intellekt",
        "frontend",
        "mobil ilovalar",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);
  document.documentElement.style.setProperty("--animate-duration", "2s");
  window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  };

  return (
    <>
      {/* Modal */}
      <div className="modal1">
        <div
          className={`overlay ${isModalOpen ? "active" : "" }` }
          onClick={() => setIsModalOpen(false)}
        ></div>
        <div className={`modal ${isModalOpen ? "active" : ""}`}>
          <div className="title">
            <p>Biz bilan bog'laning</p>
            <div
              className="icon"
              id="icon"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <X />
            </div>
          </div>
          <form ref={formRef1} onSubmit={handleSubmit1}>
            <input type="text" placeholder="Ismingiz" name="Name" required/>
            <input type="number" placeholder="Telefon raqamingiz" name="Phone Number" required/>
            <input type="email" placeholder="Elektron pochtangiz" name="Email" required/>
            {success1 && (
              <div className="success_message">
                Xabaringiz muvaffaqiyatli yuborildi!
              </div>
            )}
            <button className="btn">Jo'natish</button>
          </form>
        </div>
      </div>
      {/* Header */}
      <Header openModal={() => setIsModalOpen(true)} />
      {/*  Hero */}
      <div className="hero" id="hero">
        <div className="overlay"></div>
        <div className="container">
          <div className="hero_content">
            <div className="text">
              <h1 className="title">
                <span className="green">IT Park</span> bilan{" "}
                <span ref={el} className="text-blue-600"></span>
                <p>ni o‘rganing</p>
              </h1>
              <a href="#courses" className="btn">
                Kurslarni ko'rish <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="about" id="about">
        <div className="container">
          <div className="about_content">
            <div className="img">
              <div className="graph">
                <p className="name">O'quvchilar soni</p>
                <img src="./about/graph.svg" alt="" />
              </div>
              <div className="cap pic">
                <img src="./about/cap.png" alt="" />
              </div>
              <div className="first pic">
                <img src="./about/1.png" alt="" />
              </div>
              <div className="logo">
                <img src="./logo/trans.png" alt="About Us" />
              </div>
            </div>
            <div className="text">
              <div className="title">
                <p>Biz haqimizda</p>
              </div>
              <p className="title_name">
                Qisqa vaqtda bilim o'rganishning eng yaxshi usuli
              </p>
              <p className="desc">
                IT PARK - Innovatsion Texnologiyalar Markazi, IT sohasida yangi
                avlod mutaxassislarini tayyorlash maqsadida tashkil etilgan.
                Bizning markazimizda zamonaviy ta'lim uslublari va tajribali
                o'qituvchilar yordamida sifatli ta'lim taklif etiladi.
              </p>
              <div className="types">
                <div className="item">
                  <div className="picture">
                    <img src="./about/learn.svg" alt="" />
                  </div>
                  <div className="texts">
                    <p className="type">Eng yaxshisini o'rganing</p>
                    <p className="desc">Qiziqarli ta'lim oling.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="picture">
                    <img src="./about/users-icon.svg" alt="" />
                  </div>
                  <div className="texts">
                    <p className="type">Eng yaxshi ustozlar</p>
                    <p className="desc">Qiziqarli ta'lim oling.</p>
                  </div>
                </div>
              </div>
              <a href="#courses" className="btn">
                Kurslarni ko'rish <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Why Us */}
      <div className="why_us" id="why_us">
        <div className="container">
          <div className="why_us_content">
            <div className="title">
              <p>Nima uchun bizni Tanlashadi?</p>
              <p className="des">
                "Biz zamonaviy ta’lim, amaliy tajriba va keng imkoniyatlar
                orqali muvaffaqiyat sari yetaklaymiz."
              </p>
            </div>
            <div className="cards">
              <div className="item">
                <div className="picture">
                  <UsersRound />
                </div>
                <p className="name">Eng yaxshi o'qituvchilar</p>
                <p className="desc">
                  Bizning jamoada o‘z sohasining ustalari, tajribali va mehribon
                  o‘qituvchilar sizga yo‘l-yo‘riq ko‘rsatadi.
                </p>
              </div>
              <div className="item">
                <div className="picture">
                  <GraduationCap />
                </div>
                <p className="name">Zamonaviy uslublar</p>
                <p className="desc">
                  Darslarimiz zamonaviy metodikalar asosida olib boriladi va
                  amaliy bilim berishga qaratilgan.
                </p>
              </div>
              <div className="item">
                <div className="picture">
                  <BookOpenText />
                </div>
                <p className="name">Keng ko'lamli kurslar</p>
                <p className="desc">
                  ITning turli sohalarini qamrab oluvchi kurslar — dasturlash,
                  dizayn, marketing va boshqa yo‘nalishlar mavjud.
                </p>
              </div>
              <div className="item">
                <div className="picture">
                  <ChartNoAxesCombined />
                </div>
                <p className="name">Karyera Yordami</p>
                <p className="desc">
                  Kurslardan keyin ish topishda ko‘maklashamiz, startap va
                  kompaniyalar bilan hamkorlik qilamiz.
                </p>
              </div>
              <div className="item">
                <div className="picture">
                  <CalendarCog />
                </div>
                <p className="name">Amaliy Tajriba</p>
                <p className="desc">
                  Talabalar real loyihalarda qatnashib, amaliy tajriba
                  orttiradilar.
                </p>
              </div>
              <div className="item">
                <div className="picture">
                  <Handshake />
                </div>
                <p className="name">Do‘stona Muhit</p>
                <p className="desc">
                  IT Parkda o‘qish nafaqat bilim, balki yangi do‘stlar va
                  hamfikrlar topish imkoniyatini ham beradi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="services" id="services">
        <div className="container">
          <div className="services_content">
            <div className="title">
              <p>Xizmatlarimiz</p>
              <p className="desc">
                IT Parkda siz uchun eng dolzarb va zamonaviy xizmatlar taqdim
                etiladi. Har bir xizmatimiz orqali bilim va ko‘nikmalaringizni
                oshiring.
              </p>
            </div>
            <div className="cards">
              <Services_item
                img="./services/1.png"
                name="Dizayn"
                desc="Grafik va web dizayn asoslari, kreativ loyihalar va zamonaviy dizayn dasturlari bilan ishlashni o‘rganing."
                tags={[
                  "UI/UX dizayn",
                  "Grafik dizayn",
                  "Web dizayn",
                  "Photoshop",
                  "Illustrator",
                ]}
                openModal={() => setIsModalOpen(true)}
              />
              <Services_item
                img="./services/2.jpg"
                name="Dasturlash"
                desc="Frontend, va backend bo‘yicha chuqur bilimlar va amaliy mashg‘ulotlar."
                tags={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Python/PHP",
                ]}
                openModal={() => setIsModalOpen(true)}
              />
              <Services_item
                img="./services/3.jpg"
                name="Chet tillari"
                desc="Chet tillari bo'yicha zamonaviy kurslar, so‘zlashuv va yozish ko‘nikmalarini rivojlantiring."
                tags={["Ingliz tili", "Rus tili"]}
                openModal={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Courses */}
      <div className="courses" id="courses">
        <div className="container">
          <div className="courses_content">
            <div className="top">
              <div className="title">
                <p className="name">Kurslarimiz</p>
                <p className="desc">Siz uchun eng yaxshi kurslar</p>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <NavLink to="/">Barcha kurslar</NavLink>
                  </li>
                  <li>
                    <NavLink to="/design">Dizayn</NavLink>
                  </li>
                  <li>
                    <NavLink to="/programming">Dasturlash</NavLink>
                  </li>
                  <li>
                    <NavLink to="/language">Chet Tillari</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cards">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact" id="contact">
        <div className="container">
          <div className="contact_content">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525.8568319621124!2d65.36733148830665!3d40.10409657777492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c78ace618cb3%3A0x17e5e461f43e7d44!2sNavoiy%20I%20T%20Markaz!5e0!3m2!1sru!2s!4v1753547381202!5m2!1sru!2s"
                loading="lazy"
              ></iframe>
            </div>
            <div className="text">
              <div className="title">
                <p className="name">Biz bilan bog'laning</p>
                <p className="desc">
                  Savollaringiz bormi? Quyidagi forma orqali bizga murojaat
                  qiling — tez orada siz bilan bog‘lanamiz!
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="nma"
                  name="First Name"
                  placeholder="Sizning isminigiz"
                  required
                />
                <input
                  type="text"
                  className="nma"
                  name="Last Name"
                  placeholder="Sizning familiyangiz"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Elektron pochtangiz"
                  required
                />
                <input
                  type="number"
                  name="Phone Number"
                  placeholder="Telefon raqaminigiz"
                  required
                />
                <textarea
                  name="Message"
                  cols="30"
                  rows="10"
                  placeholder="Yozmoqchi bo'lgan xabaringizni kiriting"
                  required
                ></textarea>
                <button id="btn" type="submit">
                  Jo'natish
                </button>
                {success && (
                  <div className="success_message">
                    Xabaringiz muvaffaqiyatli yuborildi!
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="cards">
            <div className="item">
              <div className="icon">
                <Mail />
              </div>
              <div className="inform">
                <p>Email</p>
                <span>info@itpark@gmail.com</span>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Phone />
              </div>
              <div className="inform">
                <p>Telefon</p>
                <span>+998 93 123 45 67</span>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Instagram />
              </div>
              <div className="inform">
                <p>Instagram</p>
                <span>info@itpark.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Totop */}
      <div className="totop" id="backToTop">
        <a href="#hero">
          <ChevronUp />
        </a>
      </div>
    </>
  );
}
