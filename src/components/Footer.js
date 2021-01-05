import React from 'react';
import verifiedIcon from '../assets/verified_green.svg';

const Footer = () => {
  return (
    <footer>
      <div className="ui three column stackable grid">
        <div className="column text-center">
          <img
            style={{ width: '5rem', height: 'auto' }}
            src={verifiedIcon}
            alt="brackets"
          ></img>
        </div>
        <div className="column text-center">
          © {new Date().getFullYear()} Check This Contact
        </div>
        <div className="column text-center">
          <a href="header">Back to top</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
