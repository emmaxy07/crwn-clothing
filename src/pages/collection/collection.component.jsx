import React, { useState } from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionTitle, CollectionItemsContainer, CollectionContainer } from './collection.styles'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  const [query, setQuery] = useState("");

  console.log(items);
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle> 
      <input style={{
        borderRadius: "10px",
        padding: "10px",
        border: "2px solid lightgray",
        outline: "none"
      }} placeholder="Search for product" onChange={event => setQuery(event.target.value)} /> <br />
      <CollectionItemsContainer>{
        items.filter(item => {
    if (query === '') {
      return item;
    } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
      return item;
    }
  }).map(item => (
         <CollectionItem key={item.id} item={item} />
       ))}</CollectionItemsContainer>
  </CollectionContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
