import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ShowValidate from './validate/ValidateResults';
import PageHeader from './Header';
import ValidateHeader from './validate/ValidateHeader';
import gLibPhoneNumber from 'google-libphonenumber';
import Footer from '../components/Footer';
import Card from '../components/Card';
import ListItem from '../components/ListItem';

function App() {
  const [state, setState] = useState({
    phoneInput: '',
    phoneResults: [],
    phoneValidInput: null,
    phoneIsValid: null,

    emailInput: '',
    emailResults: [],
    emailValidInput: null,
    isValid: null,
  });
  const validatePhone = (event) => {
    const gPhoneUtil = gLibPhoneNumber.PhoneNumberUtil.getInstance();
    const phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-10]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
    const input = event.target.value;

    if (phoneRegex.test(input) && input.length >= 10) {
      const number = gPhoneUtil.parseAndKeepRawInput(input, 'US');

      setState({ ...state, phoneValidInput: true });
      console.log(
        gPhoneUtil.isValidNumber(number),
        gPhoneUtil.getNumberType(number),
        'type',
        number.getCountryCode(),
        gPhoneUtil.formatInOriginalFormat(number, 'US')
        // (608) 312-0994
      );
    } else {
      setState({ ...state, phoneValidInput: false });
    }
  };

  const validateEmail = (event) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const input = event.target.value;

    if (!emailFormat.test(input)) {
      setState({ ...state, emailValidInput: false });
    } else {
      setState({ ...state, emailValidInput: true, emailInput: input });
    }
  };

  return (
    <>
      <PageHeader />
      <div className="ui container">
        <h2 className="text-center">Try out the API below</h2>
        <div
          style={{ margin: '2rem 0rem 5rem 0rem' }}
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
              onChange={validatePhone}
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
              onChange={validateEmail}
              value={state.emailInput}
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
          Our API offers two simple routes...Yep it's that easy.
        </h4>
        <div class="ui relaxed divided list">
          <ListItem
            icon="mail"
            header="POST: https://api.checkthiscontact.com/email"
            description="Email Validation Route"
          />
          <ListItem
            icon="phone"
            header="POST: https://api.checkthiscontact.com/phone"
            description="Phone Validation Route"
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
}

export default App;
