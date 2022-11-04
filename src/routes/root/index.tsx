import { NavLink } from "react-router-dom";
import "../../styles/colors.css";
import logo from "../../assets/logo.svg";

const Root = () => {
	return (
		<PageBody>
			<PageHeader>
				<NavigationBar />
				<PageContainer>
					<PageHero />
				</PageContainer>
			</PageHeader>
		</PageBody>
	);
};

export default Root;

interface PageBodyProps {
	children: React.ReactNode;
}

const PageBody: React.FC<PageBodyProps> = ({ children }) => {
	return (
		<div
			style={{
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{children}
		</div>
	);
};

interface PageHeaderProps {
	children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
	return (
		<header
			style={{
				width: "100%",
				backgroundColor: "white",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{children}
		</header>
	);
};

const NavigationBar = () => {
	return (
		<div
			style={{
				maxWidth: "1300px",
				width: "100%",
				padding: "18px 0",
				display: "flex",
				justifyContent: "space-between",
				position: "fixed",
			}}
		>
			<LogoLink />
			<NavLinks />
		</div>
	);
};

const LogoLink = () => {
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

const PageHero = () => {
	return (
		<div
			style={{
				maxWidth: "880px",
				height: "900px",
				display: "flex",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "18px",
				}}
			>
				<h1
					style={{
						fontSize: "5.292em",
						fontWeight: "700",
						lineHeight: "1.25",
					}}
				>
					Our users have never been{" "}
					<span className="gradient-medium-lime">luckier</span>
				</h1>
				<p
					style={{
						fontSize: `${(1 / 16) * 24}rem`,
					}}
					className="light-gray"
				>
					The go to application for finding four clovers all around
					the world So far users have found 657 clovers and are ready
					to find more
				</p>
			</div>
		</div>
	);
};

interface PageContainerProps {
	children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
	return (
		<div
			style={{
				maxWidth: "1300px",
				width: "100%",
			}}
		>
			{children}
		</div>
	);
};
