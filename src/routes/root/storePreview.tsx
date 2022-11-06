import "../../styles/colors.css";
import "../../styles/effects.css";

import jacket from "../../assets/merch/jacket.png";
import blanket from "../../assets/merch/blanket.png";
import apron from "../../assets/merch/apron.png";
import cards from "../../assets/merch/cards.png";
import Container from "../../components/container";
import ProductCard from "../../components/productCard";

const StorePreview = () => (
	<Container
		style={{
			display: "flex",
			justifyContent: "space-between",
			gap: 60,
		}}
	>
		<ProductCard
			image={jacket}
			title="Jacket"
			text="Stay warm as you find clovers"
		/>
		<ProductCard
			image={blanket}
			title="Blanket"
			text="Wrap yourself while after a good day of finding clovers"
		/>
		<ProductCard
			image={apron}
			title="Apron"
			text="Increase your luck in the kitchen"
		/>
		<ProductCard
			image={cards}
			title="Cards"
			text="Never get a bad hand again with our lucky cards"
		/>
	</Container>
);

export default StorePreview;
