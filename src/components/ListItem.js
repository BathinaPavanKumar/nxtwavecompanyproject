import React from 'react';
import './ListItem.css';

function ListItem({ name, scientificName }) {
  return (
    <div className="list-item">
      <h3>{name}</h3>
      <p className="scientific-name">{scientificName}</p>
    </div>
  );
}

export default ListItem;