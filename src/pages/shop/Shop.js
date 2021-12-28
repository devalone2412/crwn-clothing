import {Component} from "react";
import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../components/preview-collection/Collection-Preview";

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default ShopPage;
