import { Route } from "react-router";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import ColletionPage from "../collection/collection.component";
import "./shop.styles.scss";

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={ColletionPage} />
	</div>
);

export default ShopPage;
