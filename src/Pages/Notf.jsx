import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function Notf() {
  return (
    <div className="notf">
      <Header />
      <div className="container">
        <div className="notf_content">
          <div className="img"><img src="./svg.svg" alt="404" /></div>
        <div className="text">
          <div className="title">
            <p>Page Not Found</p>
          </div>
          <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia et minima neque harum aliquam.</p>
          <NavLink to='/' className="btn">Asosiy sahifaga qaytish</NavLink>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
