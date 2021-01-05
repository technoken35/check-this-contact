import React from 'react';

function ValidateHeader({ header, icon, content }) {
  return (
    <h4 style={{ width: '100%' }} className="ui icon header">
      <i className={`icon ${icon}`}></i>
      <div className="content">
        {header}
        <div className="sub header">{content}</div>
      </div>
    </h4>
  );
}

export default ValidateHeader;
