import Container from "../../components/container";
import newYorkTimes from "../../assets/newYorkTimes.svg";
import theGuardian from "../../assets/theGuardian.svg";
import theTimes from "../../assets/theTimes.svg";
import dailyExpress from "../../assets/dailyExpress.svg";

const Recommendations = () => {
	return (
		<Container
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 60,
			}}
		>
			<h3
				style={{
					fontSize: `${(1 / 16) * 24}em`,
					fontWeight: 500,
				}}
			>
				Recommended by
			</h3>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "end",
				}}
			>
				<img src={newYorkTimes} alt="New York Times" />
				<img src={theGuardian} alt="The Guardian" />
				<img src={theTimes} alt="The Times" />
				<img src={dailyExpress} alt="Daily Express" />
			</div>
		</Container>
	);
};

export default Recommendations;
