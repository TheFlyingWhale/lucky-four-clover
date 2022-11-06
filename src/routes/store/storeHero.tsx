import "../../styles/colors.css";
import HeroContainer from "../../components/heroContainer";

const StoreHero = () => {
	return (
		<HeroContainer height="500">
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
						fontWeight: 700,
						lineHeight: "1.25",
					}}
				>
					The <span className="gradient-medium-lime">lucky</span>{" "}
					store
				</h1>
				<p
					className="light-gray"
					style={{
						fontSize: `${(1 / 16) * 24}em`,
					}}
				>
					Merch for every lucky need
				</p>
			</div>
		</HeroContainer>
	);
};

export default StoreHero;
