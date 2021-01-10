import React from 'react';
import ValidateItem from '../ListItem';

function ValidateList({ data }) {
  const renderResults = () => {
    // loop over each key in object
    for (const key in data) {
      // if the current key is an object itself then loop over nested object
      if (typeof data[key] === 'object') {
        const nestedObj = data[key];
        for (const nestedKey in nestedObj) {
          return (
            <ValidateItem
              header={nestedKey}
              description={nestedObj[nestedKey]}
            />
          );
        }
      } else {
        return <ValidateItem header={key} description={data[key]} />;
      }
    }
  };

  return (
    <div
      style={{ marginTop: '1rem' }}
      className="ui relaxed divided list results"
    >
      {renderResults()}
    </div>
  );
}

export default ValidateList;
