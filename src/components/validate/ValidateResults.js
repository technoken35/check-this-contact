import React, { useState, useEffect } from 'react';
import PrintJson from '../PrintJson';

function ValidateResults({ data }) {
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    if (Object.getOwnPropertyNames(data).length === 0) {
      setIsData(false);
    } else {
      setIsData(true);
    }
  }, [data]);

  const renderResults = () => {
    if (isData) {
      return <PrintJson data={data} />;
    }
    console.log('no query found');
    return <p style={{ marginTop: '1rem' }}>Start a query</p>;
  };
  return (
    <div className="results">
      <h3 style={{ marginTop: '1rem', marginBottom: '1rem' }}> Results</h3>

      {renderResults()}
    </div>
  );
}

export default ValidateResults;
