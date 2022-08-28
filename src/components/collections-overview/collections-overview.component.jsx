import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"; 

const CollectionsOverview = ({ collections }) => {
    const [filteredCollections, setFilteredCollections] = useState(collections);
    const [query, setQuery] = useState("");

    const handleFilter = value => {
        setQuery(value.trim());
        if (value.trim()) {
            const newFilteredCollections = collections.map((collection) => {
                const filteredItem = collection.items.filter(item => item.name.toLowerCase().includes(value.trim().toLowerCase()))
                return { ...collection, items:filteredItem};
            })
            setFilteredCollections(newFilteredCollections);
        } else {
            setFilteredCollections(collections);
        }
    }

    return (
        <div>
            <div>
            <input style={{
            borderRadius: "10px",
            padding: "10px",
            width: "100%",
            border: "2px solid lightgray",
            outline: "none"
           }} placeholder="Search for product" onChange={event => handleFilter(event.target.value)} /> <br /></div>
        <div className='collections-overview'>
        
      {
      filteredCollections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key ={id}
                    {...otherCollectionProps} />
                ))
            }
            </div>
            </div>
  );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
