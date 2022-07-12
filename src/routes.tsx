import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "common/context/User";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<UserProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="home" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</UserProvider>			
			</Router>
		</main>
	);
}