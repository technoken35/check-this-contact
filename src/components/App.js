import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ShowValidate from './validate/ValidateResults';
import PageHeader from './Header';
import ValidateHeader from './validate/ValidateHeader';
import Footer from '../components/Footer';
import Card from '../components/Card';
import ListItem from '../components/ListItem';

const App = () => {
  const [state, setState] = useState({
    phone: '',
    phoneResults: [],
    email: '',
    emailResults: [],
    countryCodes: [],
    countrySelected: '',
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [`${event.target.name}`]: event.target.value,
    });
  };

  return (
    <>
      <PageHeader />
      <div className="ui container">
        <h2 className="text-center">Try out the API below</h2>
        <div
          style={{ margin: '2rem 0rem 2rem 0rem' }}
          className="ui container stackable two column grid"
        >
          <div className="column">
            <ValidateHeader
              icon="phone"
              header="Validate Phone Number"
              content="Validate any phone number instantly by searching below."
            />
            <SearchBar
              validated={state.phoneValidInput}
              placeHolder={'Enter Phone Number 6083120995'}
              name="phone"
              onChange={handleChange}
            />
            <ShowValidate />
          </div>
          <div className="column">
            <ValidateHeader
              icon="mail"
              header="Validate Email Address"
              content="Validate any email address instantly by searching below."
            />

            <SearchBar
              validated={state.emailValidInput}
              placeHolder={'Enter Email'}
              onChange={handleChange}
              value={state.emailInput}
              name="email"
            />
            <ShowValidate />
          </div>
        </div>
      </div>
      <div className="gradient">
        <div className="d-flex align-items-center ui container stackable three column grid graident-content ">
          <div className="column ui raised very padded text d-flex align-items-center justify-content-center">
            <Card
              header="Full Verification"
              icon="check"
              description="Our API offers full contact validation with our email and phone validation tools"
            />
          </div>
          <div className="column d-flex align-items-center justify-content-center ">
            <Card
              header="Budget Friendly"
              icon="money"
              description="We offer a free tier that will take care of most needs. Subscription plans are coming for power users."
            />
          </div>
          <div className="column d-flex align-items-center justify-content-center">
            <Card
              header="Fast & Secure"
              icon="user secret"
              description="Check This Contact is powered by Laravel and uses 256-bit Advanced Standard encryption "
            />
          </div>
        </div>
      </div>
      <div className="ui container" id="documentation">
        <h3 className="text-center">Documentation</h3>
        <h4 className="ui grey header text-center">
          Our API offers three simple routes...Yep it's that easy.
        </h4>
        <div class="ui relaxed divided list">
          <ListItem
            icon="globe"
            header="GET: https://checkthiscontact.com/api/supported-regions"
            description="Supported Regions"
          />
          <ListItem
            icon="phone"
            header="GET: https://checkthiscontact.com/api/phone?phone=:number&selected-region=:region"
            description="Phone Validation Route"
          />
          <ListItem
            icon="mail"
            header="GET: https://checkthiscontact.com/api/email?email=:email"
            description="Email Validation Route"
          />
        </div>
      </div>
      <div class="ui divider"></div>

      <div className="subscriptions text-center">
        <h3 className="ui icon header">
          <i className="code icon"></i>
          <div className="content">
            Subscriptions
            <div className="sub header">
              Subscriptions for power users are coming soon!{' '}
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/263/red-heart_2764.png"
                srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/263/red-heart_2764.png 2x"
                alt="Red Heart on Google Android 11.0"
                width="10"
                height="10"
              ></img>
            </div>
          </div>
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default App;
