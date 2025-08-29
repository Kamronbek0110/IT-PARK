import {BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import "./index.css";
import Courses_all from "./components/Courses/Courses_all";
import Courses_design from "./components/Courses/Courses_design";
import Courses_language from "./components/Courses/Courses_language";
import Courses_program from "./components/Courses/Courses_program";
import Main_page from "./Pages/Main_page";
import Notf from "./Pages/Notf";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main_page />}>
					<Route path="/" element={<Courses_all />} />
					<Route path="/design" element={<Courses_design />} />
					<Route path="/programming" element={<Courses_program />} />
					<Route path="/language" element={<Courses_language />} />
				</Route>
					<Route path="*" element={<Notf />} />
			</Routes>
		</BrowserRouter>
	);
}
