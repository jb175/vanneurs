import React from "react";

function DateFilter() {
    return (
        <div className="p-4">
            <h4 className="fst-italic">Recherche par dates</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Du</span>
                </div>
                <input type="date" className="form-control" id="DateFilter From" aria-label="From" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Au</span>
                </div>
                <input type="date" className="form-control" id="DateFilter To" aria-label="To" aria-describedby="inputGroup-sizing-default"/>
            </div>
        </div>
    )
}

export default DateFilter;