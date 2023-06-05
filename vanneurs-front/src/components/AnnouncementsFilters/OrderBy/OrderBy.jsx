import React from "react";

function OrderBy() {
    return (
        <div className="p-4">
            <h4 className="fst-italic">Trier par</h4>
            <div className="input-group mb-3">
                <select className="custom-select" id="SortFilter">
                    <option defaultValue value="Default">Default</option>
                    <option value="Notation">Notation</option>
                    <option value="Date">Date</option>
                </select>
            </div>
        </div>
    )
}

export default OrderBy;