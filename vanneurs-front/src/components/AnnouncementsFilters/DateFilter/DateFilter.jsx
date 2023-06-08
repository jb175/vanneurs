import React, {useState} from "react";

const DateFilter = ({filterDateFrom, filterDateTo}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleFrom = (event) => {
        const from = event.target.value;
        setFrom(from);
        filterDateFrom(from);
    };

    const handleTo = (event) => {
        const to = event.target.value;
        setTo(to);
        filterDateTo(to);
    };
  
    return (
        <div className="p-4">
            <h4 className="fst-italic">Recherche par dates</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Du</span>
                </div>
                <input type="date" className="form-control" id="DateFilter From" aria-label="From" aria-describedby="inputGroup-sizing-default" value={from} onChange={handleFrom}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Au</span>
                </div>
                <input type="date" className="form-control" id="DateFilter To" aria-label="To" aria-describedby="inputGroup-sizing-default" value={to} onChange={handleTo}/>
            </div>
        </div>
    );
  };

export default DateFilter;