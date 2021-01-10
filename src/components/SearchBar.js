import React from 'react';

const SearchBar = ({ onChange, placeHolder, value, name, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="ui form">
      <div className="field">
        <div class="ui icon input">
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder={placeHolder}
            name={name}
          />
          <i class="search icon"></i>
        </div>
      </div>
      <button className="ui button primary">Validate</button>
    </form>
  );
};

export default SearchBar;
