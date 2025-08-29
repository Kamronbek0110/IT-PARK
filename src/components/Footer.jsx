import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer" id="footer">
			<div className="container">
				<div className="footer_content">
					<div className="item">
						<div className="logo">
							<NavLink to="/">
								<img src="./logo/logo_white.png" alt="" />
							</NavLink>
						</div>
						<p className="text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Accusamus aperiam nihil eius illo nisi quidem earum soluta, quo
							ipsa officiis!
						</p>
						<div className="socials">
							<a href="#" className="btn">
								<Instagram />
							</a>
							<a href="#" className="btn">
								<Youtube />
							</a>
							<a href="#" className="btn">
								<Facebook />
							</a>
						</div>
					</div>
					<div className="items">
						<div className="item">
							<div className="title">
								<p>Sahifalar</p>
							</div>
							<div className="links">
								<a href="#about">Biz haqimizda</a>
								<a href="#services">Xizmatlar</a>
								<a href="#courses">Kurslar</a>
								<a href="#contact">Aloqa</a>
							</div>
						</div>
						<div className="item">
							<div className="title">
								<p>Aloqa</p>
							</div>
							<div className="links">
								<a href="#">
									<Phone />
									+998 99 999 99 99
								</a>
								<a href="#">
									<Mail />
									info@itpark@gmail.com
								</a>
								<a href="#">
									<MapPin />
									Lorem ipsum dolor sit amet.
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_desc">
					<p>© Copyright 2025 IT PARK</p>
				</div>
			</div>
		</div>
	);
}
