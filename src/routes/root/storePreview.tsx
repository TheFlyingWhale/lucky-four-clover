import "../../styles/colors.css";
import "../../styles/effects.css";

import jacket from "../../assets/merch/jacket.png";
import blanket from "../../assets/merch/blanket.png";
import apron from "../../assets/merch/apron.png";
import cards from "../../assets/merch/cards.png";
import Container from "../../components/container";

const StorePreview = () => (
	<Container
		style={{
			display: "flex",
			justifyContent: "space-between",
			gap: 60,
		}}
	>
		<StorePreviewItem
			image={jacket}
			title="Jacket"
			text="Stay warm as you find clovers"
		/>
		<StorePreviewItem
			image={blanket}
			title="Blanket"
			text="Wrap yourself while after a good day of finding clovers"
		/>
		<StorePreviewItem
			image={apron}
			title="Apron"
			text="Increase your luck in the kitchen"
		/>
		<StorePreviewItem
			image={cards}
			title="Cards"
			text="Never get a bad hand again with our lucky cards"
		/>
	</Container>
);

export default StorePreview;

interface StorePreviewItemProps {
	image: string;
	title: string;
	text?: string;
	name?: string;
	price?: string;
}

const StorePreviewItem: React.FC<StorePreviewItemProps> = ({
	image,
	title,
	text,
	name,
	price,
}) => {
	return (
		<div
			className="drop-shadow"
			style={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: "white",
				borderRadius: "12px",
				padding: 24,
				width: "fit-content",
				gap: 24,
				alignItems: "center",
				flexGrow: 1,
				flexBasis: 0,
			}}
		>
			<img
				src={image}
				alt={title}
				style={{
					width: 200,
				}}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 6,
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
				<p
					style={{
						fontSize: `${(1 / 16) * 18}em`,
					}}
				>
					{text}
				</p>
			</div>
		</div>
	);
};
