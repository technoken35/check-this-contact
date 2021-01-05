import React from 'react';

const ListItem = ({ icon, header, description }) => {
  return (
    <div className="item">
      <i class={`large ${icon} middle aligned icon`}></i>
      <div className="content right aligned">
        <div className="header">{header}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ListItem;
