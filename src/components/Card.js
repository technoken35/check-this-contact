import React from 'react';

const Card = ({ header, icon, description }) => {
  return (
    <div class="transparent-card">
      <div class="content">
        <div style={{ marginBottom: '1rem' }} class="header">
          {header} <i className={`ui icon ${icon}`} />
        </div>

        <div class="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
