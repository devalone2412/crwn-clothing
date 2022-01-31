import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import {compose} from "redux";
import {connect} from "react-redux";
import withSpinner from "../with-spinner/With-Spinner";
import CollectionsOverview from "./Collections-Overview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;