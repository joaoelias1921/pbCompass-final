import Login from "pages/Login";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLoginProvider } from "common/context/UserLogin";
import { RegisterProvider } from "common/context/Register";
import StandardPage from "pages/StandardPage";
import Register from "pages/Register";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>	
				<RegisterProvider>		
					<UserLoginProvider>
						<Routes>
							<Route path="/" element={<StandardPage />}>									
									<Route path="/register" element={<Register />} />
									<Route path="/login" element={<Login />} />										
							</Route>	
							<Route path="/home" element={<Home />} />								
						</Routes>	
					</UserLoginProvider>
				</RegisterProvider>										
			</Router>
		</main>
	);
}