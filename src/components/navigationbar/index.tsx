import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavigationBar = () => {
	return (
		<div
			style={{
				position: "fixed",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				backgroundColor: "rgba(255, 255, 255, 0.50)",
				backdropFilter: "blur(25px)",
			}}
		>
			<div
				style={{
					maxWidth: "1300px",
					width: "100%",
					padding: "18px 0",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<LogoLink />
				<NavLinks />
			</div>
		</div>
	);
};

export default NavigationBar;

export const LogoLink = () => {
	return (
		<NavLink
			to="/"
			style={{
				display: "flex",
				gap: "18px",
				alignItems: "center",
			}}
		>
			<img src={logo} alt="" />
			<p
				style={{
					fontSize: `${(1 / 16) * 24}rem`,
					fontWeight: "700",
				}}
			>
				Lucky Four Clover
			</p>
		</NavLink>
	);
};

const NavLinks = () => {
	return (
		<nav>
			<ul
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "36px",
				}}
			>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/store">Store</NavLink>
				</li>
			</ul>
		</nav>
	);
};
