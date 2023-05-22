import React, { useState } from "react";

function CreateAnnouncement() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter les données du formulaire ici
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Option:", option);
  };

  return (
    <div className="container mt-5">
      <h2>Créer une annonce</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date de début:</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date de fin:</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sélectionnez une option:</label>
          <select
            className="form-control"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">Choisir une option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Valider
        </button>
      </form>
    </div>
  );
}

export default CreateAnnouncement;
