import React from 'react';

const SearchBar = ({ onChange, placeHolder, validated, value, name }) => {
  const renderButton = () => {
    if (validated) {
      return <button className="ui button primary">Validate</button>;
    }

    return null;
  };
  return (
    <form className="ui form">
      <div className="field">
        <div class="ui icon input">
          <input
            //value={value}
            onChange={onChange}
            type="text"
            placeholder={placeHolder}
            name={name}
          />
          <i class="search icon"></i>
        </div>
      </div>
      {renderButton()}
    </form>
  );
};

export default SearchBar;
