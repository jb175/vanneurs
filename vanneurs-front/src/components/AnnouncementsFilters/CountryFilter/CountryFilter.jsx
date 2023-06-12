import React, { useState } from 'react';

const CountryFilter = ({filterCountry }) => {
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    const country = event.target.value;
    setCountry(country);
    filterCountry(country);
  };

  return (
    <div className="p-4">
        <h4 className="fst-italic">Recherche par pays</h4>
        <input type="text" className="form-control" id="countryFilter" value={country} onChange={handleChange}/>
    </div>
  );
};

export default CountryFilter;