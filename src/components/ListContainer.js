import React from 'react';
import ListItem from './ListItem';
import './ListContainer.css';

function ListContainer({ 
  listId, 
  name, 
  description, 
  items = [], 
  selected, 
  onSelect, 
  showCreateView 
}) {
  
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className={`list-container ${selected ? 'selected' : ''}`}>
      <div className="list-header">
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          disabled={showCreateView}
        />
        <div className="list-info">
          <span className="list-name">{name}</span>
          <span className="list-description">{description}</span>
        </div>
      </div>
      <div className="list-items">
        {safeItems.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            scientificName={item.scientific}
          />
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
