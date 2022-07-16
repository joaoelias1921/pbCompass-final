import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "assets/login/compass-logo.png";
import styles from "./StandardPage.module.scss";
import { useEffect } from "react";

export default function StandardPage() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		location.pathname == "/" && navigate("/login");
	});

	return (
		<>
			<section className={styles.mainContainer}>
				<section className={styles.leftContainer}>
					<Outlet />
				</section>
				<section className={styles.bgContainer}>
					<img src={Logo} alt="Compass Logo" />
				</section>
			</section>
		</>
	);
}