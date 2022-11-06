import { NavLink } from "react-router-dom";
import Container from "../../components/container";
import PageHeader from "../../components/pageHeader";

const Download = () => {
	return (
		<>
			<PageHeader />
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 24,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 12,
					}}
				>
					<h1
						style={{
							fontSize: `${(1 / 16) * (6 * 8)}em`,
							fontWeight: 700,
						}}
					>
						Feeling lucky?
					</h1>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							fontSize: `${(1 / 16) * 18}em`,
						}}
					>
						<p>Thank you for downloading Lucky Four Clover</p>
						<p>We look forward to seeing all your finds!</p>
					</div>
				</div>
				<NavLink to="/">
					<button>
						<p
							style={{
								fontSize: `${(1 / 16) * 18}em`,
							}}
						>
							Go back to home
						</p>
					</button>
				</NavLink>
			</Container>
		</>
	);
};

export default Download;
