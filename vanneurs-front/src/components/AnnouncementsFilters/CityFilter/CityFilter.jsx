import React, {useState} from "react";

const CityFilter = ({ filterCity }) => {
    const [City, setCity] = useState('');
  
    const handleChange = (event) => {
      const City = event.target.value;
      setCity(City);
      filterCity(City);
    };
  
    return (
      <div className="p-4">
          <h4 className="fst-italic">Recherche par ville</h4>
          <input type="text" className="form-control" id="CityFilter" value={City} onChange={handleChange}/>
      </div>
    );
  };
  
  export default CityFilter;