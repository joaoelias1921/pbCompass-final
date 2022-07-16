import Login from "pages/Login";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "common/context/User";
import StandardPage from "pages/StandardPage";
import Register from "pages/Register";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<UserProvider>
					<Routes>
						<Route path="/" element={<StandardPage />}>
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
						</Route>
						<Route path="home" element={<Home />} />
					</Routes>
				</UserProvider>			
			</Router>
		</main>
	);
}