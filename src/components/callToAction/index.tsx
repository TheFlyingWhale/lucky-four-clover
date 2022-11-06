import { NavLink } from "react-router-dom";
import Container from "../container";

interface CallToActionProps {
	title: string;
	text: string;
	buttonText: string;
	url: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
	title,
	text,
	buttonText,
	url = "/",
}) => {
	return (
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
				<h2
					style={{
						fontSize: `${(1 / 16) * 48}em`,
						fontWeight: 700,
					}}
				>
					{title}
				</h2>
				<p
					style={{
						fontSize: `${(1 / 16) * 24}em`,
					}}
				>
					{text}
				</p>
			</div>
			<NavLink to={url}>
				<button>
					<p>{buttonText}</p>
				</button>
			</NavLink>
		</Container>
	);
};

export default CallToAction;
