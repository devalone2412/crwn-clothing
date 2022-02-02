import {Route} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import CollectionsOverviewContainer from "../../components/collections-overview/Collections-Overview-Container";
import CollectionPageContainer from "../collection/CollectionPageContainer";
import {fetchCollectionsStart} from "../../redux/shop/shop.action";

const ShopPage = ({fetchCollectionsStart, match}) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                   component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`}
                   component={CollectionPageContainer}/>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);