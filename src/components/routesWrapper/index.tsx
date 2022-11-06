import { Outlet } from "react-router-dom";
import PageFooter from "../footer";
import NavigationBar from "../navigationbar";
import PageBody from "../pageBody";

const RoutesWrapper = () => {
	return (
		<PageBody>
			<NavigationBar />
			<Outlet />
			<PageFooter />
		</PageBody>
	);
};

export default RoutesWrapper;
