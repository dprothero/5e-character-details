import React, { useState } from 'react';
import './App.css';
import { getHeightWeight, races } from './services/heightWeight';

function App() {
  const [selectedRace, setSelectedRace] = useState(null);
  const [heightWeightData, setHeightWeightData] = useState(null);

  function calcHeightWeight(value) {
    setHeightWeightData(value ? getHeightWeight(value) : null);
  }

  function selectRace(event) {
    setSelectedRace(event.target.value);
    calcHeightWeight(event.target.value);
  }

  return (
    <div className="App">
      <div className="MainGroup">
        <div className="Input">
          <label>Select Race:</label>
          <select onChange={selectRace}>
            <option value="">(select race)</option>
            {races.map((race, index) => (
              <option key={index} value={index}>
                {race.name}
              </option>
            ))}
          </select>
        </div>
        {heightWeightData ? (
          <div className="ResultGroup">
            <div className="ResultRefresh">
              <button type="button" onClick={() => calcHeightWeight(selectedRace)}>
                <span role="img" aria-label="Refresh">
                  🔃
                </span>
              </button>
            </div>
            <div className="Result">
              <div className="ResultRow">
                <label>Height:</label>
                <span>{heightWeightData.friendlyHeight}</span>
              </div>
              <div className="ResultRow">
                <label>Weight:</label>
                <span>{heightWeightData.weight} lbs</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
