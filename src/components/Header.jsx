import {ArrowUpRight, ChartNoAxesColumn, X} from "lucide-react";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
export default function Header({openModal}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [closeMenu, setCloseMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`header ${scrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="header_content">
					<div className="logos">
						<div className="logo">
							<NavLink to="/">
								<img src="./logo/logo.png" alt="IT PARK Logo" />
							</NavLink>
						</div>
						<div className="logo">
							<NavLink to="/">
								<img src="./logo/logo_white.png" alt="IT PARK Logo" />
							</NavLink>
						</div>
					</div>
					<nav>
						<ul className={`menu ${isMenuOpen ? "active" : ""}`}>
							<li>
								<a href="#hero">Asosiy</a>
							</li>
							<li>
								<a href="#about">Biz haqimizda</a>
							</li>
							<li>
								<a href="#services">Xizmatlar</a>
							</li>
							<li>
								<a href="#courses">Kurslar</a>
							</li>
							<li>
								<a href="#contact">Aloqa</a>
							</li>
						</ul>
						<p
							className={`menu_btn ${closeMenu ? "active" : ""}`}
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
								setCloseMenu(!closeMenu);
							}}
							id="menu_btn"
						>
							<ChartNoAxesColumn />
							<X />
						</p>
					</nav>
					<div className="tools">
						<p className="btn" id="butn" onClick={openModal}>
							Bog'lanish <ArrowUpRight />
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
