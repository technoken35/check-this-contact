import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ValidateResults from './validate/ValidateResults';
import PageHeader from './Header';
import ValidateHeader from './validate/ValidateHeader';
import Footer from '../components/Footer';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import validate from '../api/validate';
import { baseURL } from '../api/config';

const App = () => {
  const [state, setState] = useState({
    loading: false,
    phone: '',
    phoneResults: {},
    email: '',
    emailResults: {},
    countryCodes: [],
    countrySelected: 'US',
  });

  const fetchSupportedRegions = async () => {
    const res = await validate.get('supported-regions');
    setState({
      ...state,
      countryCodes: res.data,
    });

    console.log(res.data);
  };

  useEffect(() => {
    console.log('component mounted');
    //fetchSupportedRegions();
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [`${event.target.name}`]: event.target.value,
    });
  };

  const validateAll = async () => {
    setState({ ...state, loading: true });
    const emailRes = await validate.get(`email?email=${state.email}`);

    const phoneRes = await validate.get(
      `phone?number=${state.phone}&selected-region=us`
    );

    setState({
      ...state,
      phoneResults: phoneRes.data,
      emailResults: emailRes.data,
      loading: false,
    });

    console.log(state, phoneRes);
  };

  const validateEmail = async (event) => {
    event.preventDefault();
    setState({ ...state, loading: true });

    if (state.phone && state.email) {
      validateAll();
    } else {
      const res = await validate.get(`email?email=${state.email}`);
      console.log('validate email');
      setState({
        ...state,
        emailResults: res.data,
        loading: false,
      });
    }
  };

  const validatePhone = async (event) => {
    event.preventDefault();
    setState({ ...state, loading: true });

    if (state.phone && state.email) {
      validateAll();
    } else {
      console.log('Validate Phone');
      const res = await validate.get(
        `phone?number=${state.phone}&selected-region=us`
      );

      setState({
        ...state,
        phoneResults: res.data,
        loading: false,
      });

      console.log(state, res.data);
    }
  };

  const Spinner = () => {
    return <div class="ui active centered inline loader"></div>;
  };

  return (
    <>
      <PageHeader />
      <div className="ui container">
        <h2 className="text-center">Try out the API below</h2>
        <div
          style={{ margin: '2rem 0rem 2rem 0rem', padding: '1rem' }}
          className="ui container stackable two column grid"
        >
          <div className="column">
            <ValidateHeader
              icon="phone"
              header="Validate Phone Number"
              content="Validate any phone number instantly by searching below."
            />
            <SearchBar
              placeHolder={'Enter Phone Number 6083120995'}
              name="phone"
              onChange={handleChange}
              onSubmit={validatePhone}
            />
            {state.loading ? (
              <Spinner />
            ) : (
              <ValidateResults data={state.phoneResults} />
            )}
          </div>
          <div className="column">
            <ValidateHeader
              icon="mail"
              header="Validate Email Address"
              content="Validate any email address instantly by searching below."
            />

            <SearchBar
              placeHolder={'Enter Email'}
              onChange={handleChange}
              value={state.email}
              onSubmit={validateEmail}
              name="email"
            />
            {state.loading ? (
              <Spinner />
            ) : (
              <ValidateResults data={state.emailResults} />
            )}
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
          Our API offers three simple routes...Yep it's that easy. (These are
          temporary routes we will be using a uniform domain soon)
        </h4>
        <div className="ui relaxed divided list">
          <ListItem
            icon="globe"
            header={`GET: ${baseURL}supported-regions`}
            description="Supported Regions"
          />
          <ListItem
            icon="phone"
            header={`GET: ${baseURL}phone?number=:number&selected-region=:region`}
            description="Phone Validation Route"
          />
          <ListItem
            icon="mail"
            header={`GET: ${baseURL}email?email=:email`}
            description="Email Validation Route"
          />
        </div>
      </div>
      <div className="ui divider"></div>

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
