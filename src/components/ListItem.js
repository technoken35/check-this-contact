import React from 'react';

const ListItem = ({ header, description }) => {
  return (
    <div className="item custom-item">
      <div className="content">
        <div className="header">{header}</div>
        <div style={{ overflow: 'hidden' }} className="description">
          {description}
        </div>
      </div>
    </div>
  );
};
export default ListItem;
