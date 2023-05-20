import React from "react";
import HouseList from "../HouseList/HouseList";

function Announcements() {
  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-md-3">
          <div className="position-sticky">
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">Filtres</h4>
              <p className="mb-0">Utilise ces filtres pour rechercher la maison de tes réves!</p>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Filtre 1</h4>
              <ol className="list-unstyled mb-0">
                <li>Test</li>
                <li>Tets2</li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Filtre 2</h4>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <HouseList/>
        </div>
      </div>
    </div>
  );
}

export default Announcements;