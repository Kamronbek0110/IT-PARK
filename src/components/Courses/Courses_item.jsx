import {PhoneCall, Star, UserRound} from "lucide-react";
import {useState} from "react";
import "animate.css";

export default function Courses_item({name,img, desc}) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="item">
			<div className="img">
				<img src={img} alt="" />
			</div>
			<div className="texts">
				<div className="icons">
					<p className="name">{name}</p>
					<div className="icon">
						<Star />
						<p>5.0</p>
					</div>
				</div>
				<div className="text">
					<p className="desc">
						{desc}
					</p>
				</div>
				<div className="foot">
					<div className="students">
						<UserRound />
						<p>1,000</p>
						<span>o'quvchilar</span>
					</div>
					<div className="phone">
						<PhoneCall
							size={20}
							className={`btn ${
								isHovered ? "animate__animated animate__tada" : ""
							}`}
							onMouseEnter={() => setIsHovered(true)}
							onAnimationEnd={() => setIsHovered(false)}
							onMouseLeave={() => setIsHovered(false)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
