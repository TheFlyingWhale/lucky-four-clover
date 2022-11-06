import IconMap from "../../assets/IconMap.svg";
import IconStar from "../../assets/IconStar.svg";
import IconCheck from "../../assets/IconCheck.svg";
import GoogleStore from "../../assets/googleStore.png";
import AppStore from "../../assets/appStore.svg";
import { NavLink } from "react-router-dom";
import HeroContainer from "../../components/heroContainer";

const RootHero = () => {
	return (
		<HeroContainer>
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
					the world <br /> So far users have found 657 clovers and are
					ready to find more
				</p>
			</div>
			<div
				style={{
					display: "flex",
					gap: 36,
				}}
			>
				<HeroFeatureItem
					svg={IconMap}
					title="Clover map"
					text="Get an overview over all the best locations"
				/>
				<HeroFeatureItem
					svg={IconStar}
					title="Ranking"
					text="Climb to the top of the ladder and lead the way"
				/>
				<HeroFeatureItem
					svg={IconCheck}
					title="Verification"
					text="Together we create a quality service"
				/>
			</div>
			<div
				style={{
					display: "flex",
					gap: 36,
				}}
			>
				<NavLink to="/">
					<img src={AppStore} alt="Apple app store" />
				</NavLink>
				<NavLink to="/">
					<img
						src={GoogleStore}
						alt="Google app store"
						style={{
							height: 40,
						}}
					/>
				</NavLink>
			</div>
		</HeroContainer>
	);
};

export default RootHero;

interface HeroFeatureItemProps {
	svg: string;
	title: string;
	text: string;
}

const HeroFeatureItem: React.FC<HeroFeatureItemProps> = ({
	svg,
	title,
	text,
}) => {
	return (
		<div
			style={{
				maxWidth: "200px",
				display: "flex",
				flexDirection: "column",
				gap: 12,
			}}
		>
			<div
				className="bg-gradient-medium-lime"
				style={{
					width: 54,
					height: 54,
					padding: 12,
					borderRadius: 12,
					boxSizing: "border-box",
				}}
			>
				<img src={svg} alt="" />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 6,
				}}
			>
				<h3
					style={{
						fontSize: `${(1 / 16) * 18}em`,
						fontWeight: 700,
					}}
				>
					{title}
				</h3>
				<p
					style={{
						fontSize: `${(1 / 16) * 16}em`,
						fontWeight: 500,
					}}
					className="light-gray"
				>
					{text}
				</p>
			</div>
		</div>
	);
};
