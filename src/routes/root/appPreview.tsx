import "../../styles/colors.css";
import appMap from "../../assets/appMap.png";
import appRank from "../../assets/appRank.png";
import IconMap from "../../assets/IconMap.svg";
import IconStar from "../../assets/IconStar.svg";
import IconCheck from "../../assets/IconCheck.svg";
import Container from "../../components/container";

const AppPreview = () => {
	return (
		<Container
			style={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<AppPreviewItem
				svg={IconMap}
				title="Map"
				text="With the map you'll get the best overview over all the lucky spots"
				image={appMap}
			/>
			<AppPreviewItem
				svg={IconStar}
				title="Rank"
				text="Follow the luckiest users and climb the ladder"
				image={appRank}
			/>
			<AppPreviewItem
				svg={IconCheck}
				title="Verification"
				text="Verify yours and others findings Together we increase our luck"
				image={appMap}
			/>
		</Container>
	);
};

export default AppPreview;

interface AppPreviewItemProps {
	svg: string;
	title: string;
	text: string;
	image: string;
}

const AppPreviewItem: React.FC<AppPreviewItemProps> = ({
	svg,
	title,
	text,
	image,
}) => {
	return (
		<div
			style={{
				maxWidth: 300,
				display: "flex",
				flexDirection: "column",
				gap: 36,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 24,
				}}
			>
				<div
					style={{
						display: "flex",
						gap: 12,
					}}
				>
					<img
						src={svg}
						alt=""
						style={{
							width: 35,
						}}
					/>
					<h3
						className="green-dark"
						style={{
							fontSize: `${(1 / 16) * 36}em`,
							fontWeight: 700,
						}}
					>
						{title}
					</h3>
				</div>
				<p
					className="light-gray"
					style={{
						fontSize: `${(1 / 16) * 18}em`,
					}}
				>
					{text}
				</p>
			</div>
			<img src={image} alt="" />
		</div>
	);
};
