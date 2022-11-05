import { NavLink } from "react-router-dom";
import Container from "../container";
import { LogoLink } from "../navigationbar";

interface FooterLink {
	text: string;
	url: string;
}

const aboutLinks: FooterLink[] = [
	{
		text: "Application",
		url: "/",
	},
	{
		text: "Vacancies",
		url: "/",
	},
	{
		text: "Press",
		url: "/",
	},
	{
		text: "Investor relations",
		url: "/",
	},
];

const helpAndContactLinks: FooterLink[] = [
	{
		text: "Technical support",
		url: "/",
	},
	{
		text: "Register as user",
		url: "/",
	},
	{
		text: "Security",
		url: "/",
	},
	{
		text: "Subscribe to newsletter",
		url: "/",
	},
];

const PageFooter = () => {
	return (
		<footer
			style={{
				width: "100%",
				height: "fit-content",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<svg
				fill="white"
				width="100%"
				height="fit-content"
				viewBox="0 0 500 13"
				preserveAspectRatio="none"
			>
				<path
					d="	M 0,13
						Q 250, -13 500,13
						Z
					"
				/>
			</svg>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					backgroundColor: "white",
					width: "100%",
				}}
			>
				<Container
					style={{
						padding: "60px 0px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "start",
					}}
				>
					<FooterColumn title="About" links={aboutLinks} />
					<FooterColumn
						title="Help and contact"
						links={helpAndContactLinks}
					/>
					<LogoLink />
				</Container>
			</div>
		</footer>
	);
};

export default PageFooter;

interface FooterColumnProps {
	links: FooterLink[];
	title: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ links, title }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 18,
			}}
		>
			<p
				style={{
					fontSize: `${(1 / 16) * 30}em`,
					fontWeight: 600,
				}}
			>
				{title}
			</p>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 12,
				}}
			>
				{links.map((link, index) => {
					return (
						<NavLink to={link.url ? link.url : "/"} key={index}>
							<p
								style={{
									fontSize: `${(1 / 16) * 18}em`,
								}}
							>
								{link.text}
							</p>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};
