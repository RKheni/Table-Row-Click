import React from 'react';

const ItemPage = ({selectedItem}) => {
  return (
    <div>
      <h1>Selected Item Details</h1>
      <p>ID: {selectedItem.id}</p>
      <p>Name: {selectedItem.name}</p>
      <p>Email: {selectedItem.email}</p>
    </div>
  );
};

export default ItemPage;
