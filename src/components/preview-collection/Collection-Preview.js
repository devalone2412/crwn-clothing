import './Collection-Preview.scss'
import CollectionItem from "../collection-item/Collection-Item";

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...itemProps}) => (
                        <CollectionItem key={id} {...itemProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;
