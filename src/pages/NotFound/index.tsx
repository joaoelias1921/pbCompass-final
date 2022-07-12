import styles from "./NotFound.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div className={classNames({
			[styles.container]: true,
		})}>
			<div className={styles.voltar}>
				<button onClick={() => navigate(-1)}>
					{"< Voltar"}
				</button>
			</div>
		</div>
	);
}