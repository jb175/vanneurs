import React, {useState} from "react";


const OrderBy = ({filterOrderBy }) => {
    const [orderBy, setOrderBy] = useState('');
  
    const handleChange = (event) => {
      const orderBy = event.target.value;
      setOrderBy(orderBy);
      filterOrderBy(orderBy);
    };
  
    return (
      <div className="p-4">
          <h4 className="fst-italic">Recherche par pays</h4>
            <div className="input-group mb-3">
                <select className="custom-select" id="SortFilter" onChange={handleChange}>
                    <option defaultValue value="Default">Default</option>
                    <option value="Notation">Notation</option>
                    <option value="Date">Date</option>
                </select>
            </div>
      </div>
    );
  };

export default OrderBy;