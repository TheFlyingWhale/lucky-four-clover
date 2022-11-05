import "../../styles/colors.css";
import "../../styles/effects.css";
import PageHeader from "../../components/pageHeader";
import PageBody from "../../components/pageBody";
import RootHero from "./rootHero";
import Recommendations from "./recommendations";
import CallToAction from "../../components/callToAction";
import AppPreview from "./appPreview";
import StorePreview from "./storePreview";
import AppReviews from "./appReviews";
import PageFooter from "../../components/footer";

const Root = () => {
	return (
		<PageBody>
			<PageHeader>
				<RootHero />
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
				<Recommendations />

				<CallToAction
					title="Increase your luck today"
					text="Turn your life around"
					buttonText="Download"
					url="/"
				/>
				<AppPreview />

				<CallToAction
					title="The luckiest merch"
					text="Increase your chances with up to 999%"
					buttonText="Go to store"
					url="/"
				/>
				<StorePreview />

				<AppReviews />

				<CallToAction
					title="Join us!"
					text="We're up all night to get lucky"
					buttonText="Download"
					url="/"
				/>
			</main>
			<PageFooter />
		</PageBody>
	);
};

export default Root;
