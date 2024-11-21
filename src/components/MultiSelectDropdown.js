import React from 'react';

const MultiSelectDropdown = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="multi-select-dropdown">
      <label>Select a filter</label>
      <select onChange={handleChange} className="dropdown">
        <option value="">--Select Filter--</option>
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
      </select>
    </div>
  );
};

export default MultiSelectDropdown;
