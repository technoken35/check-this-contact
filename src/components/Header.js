import React from 'react';
import verified from '../assets/verified_green.svg';

const Header = () => {
  return (
    <header id="header">
      <div className="ui grey secondary pointing menu">
        <h4 className=" item " href="#">
          <i className="check icon"></i> Check This Contact
        </h4>

        <div className="right menu">
          <a className="item " href="#documentation">
            Documentation
          </a>
        </div>
      </div>
      <div className="header-content ui two column doubling stackable grid container d-flex">
        <div>
          <h1>The best contact validation API for developers </h1>
          <p>
            Know if your contacts are valid with our validation API. We offer
            both email and phone validation!
          </p>
        </div>
        <div>
          <img
            style={{ width: '10rem', height: 'auto' }}
            src={verified}
            alt="brackets"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
