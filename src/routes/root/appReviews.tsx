import "../../styles/colors.css";
import "../../styles/effects.css";

import Container from "../../components/container";

import jonas from "../../assets/people/jonas.png";
import loretta from "../../assets/people/loretta.png";
import ipsuma from "../../assets/people/ipsuma.png";
import loremus from "../../assets/people/loremus.png";
import dolor from "../../assets/people/dolor.png";
import amet from "../../assets/people/amet.png";

const AppReviews = () => {
	return (
		<Container
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 24,
			}}
		>
			<h2
				style={{
					fontSize: `${(1 / 16) * 24}em`,
					fontWeight: 500,
				}}
			>
				What does our users have to say?
			</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					gap: 30,
				}}
			>
				<AppRatingColumn>
					<AppRatingItem
						image={jonas}
						text="I found my first clover!"
						name="Jonas"
						date="12/07/2020"
					/>
					<AppRatingItem
						image={loretta}
						text="Found a clover and got a job on the same day"
						name="Loretta"
						date="25/08/2021"
					/>
				</AppRatingColumn>

				<AppRatingColumn>
					<AppRatingItem
						image={ipsuma}
						text="It's trully amazing what a simple app can do"
						name="Ipsuma"
						date="02/05/2020"
					/>
					<AppRatingItem
						image={loremus}
						text="I can finally gamble and know it will pay off"
						name="Loremus"
						date="18/06/2021"
					/>
				</AppRatingColumn>

				<AppRatingColumn>
					<AppRatingItem
						image={dolor}
						text="Today I got my fifth wife thanks to this app"
						name="Dolor"
						date="17/07/2022"
					/>
					<AppRatingItem
						image={amet}
						text="Heaven here I come!"
						name="Amet"
						date="23/08/2021"
					/>
				</AppRatingColumn>
			</div>
		</Container>
	);
};

export default AppReviews;

interface AppRatingColumnProps {
	children: React.ReactNode;
}

const AppRatingColumn: React.FC<AppRatingColumnProps> = ({ children }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 30,
			}}
		>
			{children}
		</div>
	);
};

interface AppRatingItemProps {
	image: string;
	text: string;
	name: string;
	date: string;
}

const AppRatingItem: React.FC<AppRatingItemProps> = ({
	image,
	text,
	name,
	date,
}) => {
	return (
		<div
			className="drop-shadow"
			style={{
				display: "flex",
				flexDirection: "row",
				backgroundColor: "white",
				borderRadius: "12px",
				padding: 24,
				gap: 18,
				alignItems: "center",
			}}
		>
			<img src={image} alt="" />
			<div>
				<p
					style={{
						fontSize: `${(1 / 16) * 18}em`,
						fontWeight: 500,
					}}
				>
					"{text}"
				</p>
				<p
					className="light-gray"
					style={{
						fontSize: `${(1 / 16) * 16}em`,
					}}
				>
					<span
						className="light-gray"
						style={{
							fontWeight: 500,
						}}
					>
						{name}
					</span>{" "}
					{date}
				</p>
			</div>
		</div>
	);
};
