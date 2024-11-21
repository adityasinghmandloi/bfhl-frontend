import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './components/TextInput';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import FilteredResponse from './components/FilteredResponse';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [filteredResponse, setFilteredResponse] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJsonInputChange = (input) => {
    setJsonInput(input);
    setErrorMessage('');
    setFilteredResponse(null); // Reset filtered response on new input
  };

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonInput); // Validate JSON format
      // Call backend API to process input
      const response = await axios.post('http://localhost:5000/bfhl', parsedData);
      setFilteredResponse(response.data);
    } catch (error) {
      setErrorMessage('Invalid JSON input.');
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter); // Update selected filter based on dropdown choice
  };

  return (
    <div className="App">
      <h1 className="title">API Input</h1>

      <div className="input-section">
        <TextInput value={jsonInput} onChange={handleJsonInputChange} />
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}

      {jsonInput && !errorMessage && !filteredResponse && (
        <MultiSelectDropdown onChange={handleFilterChange} />
      )}

      {filteredResponse && selectedFilter && (
        <FilteredResponse data={filteredResponse} filter={selectedFilter} />
      )}
    </div>
  );
}

export default App;
