import Footer from "components/Footer";
import Inicio from "pages/Login";
import NotFound from "pages/NotFound";
import Sobre from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="home" element={<Sobre />} />
					<Route path="*" element={<NotFound />} />		
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}