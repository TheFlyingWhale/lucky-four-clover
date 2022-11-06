import PageHeader from "../../components/pageHeader";
import ProductCard from "../../components/productCard";
import StoreHero from "./storeHero";
import Container from "../../components/container";

import jacket from "../../assets/merch/jacket.png";
import blanket from "../../assets/merch/blanket.png";
import apron from "../../assets/merch/apron.png";
import cards from "../../assets/merch/cards.png";

import tights from "../../assets/merch/tights.png";
import sweater from "../../assets/merch/sweater.png";
import fanny from "../../assets/merch/fannyPack.png";
import blanketSmall from "../../assets/merch/blanketSmall.png";

import phoneCover from "../../assets/merch/phoneCover.png";
import backpack from "../../assets/merch/backpack.jpg";
import briefcase from "../../assets/merch/briefCase.png";
import sticker from "../../assets/merch/sticker.png";

const Store = () => {
	return (
		<>
			<PageHeader>
				<StoreHero />
			</PageHeader>
			<main
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 6 * 40,
				}}
			>
				<Products />
			</main>
		</>
	);
};

export default Store;

const Products = () => {
	return (
		<Container
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 60,
			}}
		>
			<div
				style={{
					width: "100%",
					display: "flex",
					gap: 60,
				}}
			>
				<ProductCard
					image={jacket}
					title="Jacket"
					name="Woolie goolie"
					price="249,99"
				/>
				<ProductCard
					image={blanket}
					title="Blanket"
					name="Coolie Woolie"
					price="49,99"
				/>
				<ProductCard
					image={apron}
					title="Apron"
					name="Foody cooky"
					price="29,99"
				/>
				<ProductCard
					image={cards}
					title="Cards"
					name="Clovery okoery"
					price="5,99"
				/>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					gap: 60,
				}}
			>
				<ProductCard
					image={tights}
					title="Tights"
					name="Trainie fainie"
					price="69,99"
				/>
				<ProductCard
					image={sweater}
					title="Sweater"
					name="Woolie sweati"
					price="89,99"
				/>
				<ProductCard
					image={fanny}
					title="Fanny pack"
					name="fanny pannie"
					price="23,99"
				/>
				<ProductCard
					image={blanketSmall}
					title="Blanket"
					name="Tiny woolie goolie"
					price="48,99"
				/>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					gap: 60,
				}}
			>
				<ProductCard
					image={phoneCover}
					title="Phone cover"
					name="Phonie lonie"
					price="19,99"
				/>
				<ProductCard
					image={backpack}
					title="Backpack"
					name="Packie dackie"
					price="99,99"
				/>
				<ProductCard
					image={briefcase}
					title="Suitcase"
					name="Trollie dollie"
					price="119,99"
				/>
				<ProductCard
					image={sticker}
					title="Sticker"
					name="Sticky icky"
					price="2,99"
				/>
			</div>
		</Container>
	);
};
