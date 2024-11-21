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
    setErrorMessage(''); // Reset error message on new input
    setFilteredResponse(null); // Reset filtered response on new input
  };

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonInput); // Validate JSON format
      // Check if it's an array
      if (!Array.isArray(parsedData.data)) {
        setErrorMessage('Input JSON must contain an array under the "data" key.');
        return;
      }
  
      const response = await axios.post('https://bfhl-backend-i7r9.onrender.com/bfhl', {
        data: parsedData.data, // Send the data array from the input
        category: selectedFilter, // Send the selected filter (category) to backend
      });
      
  
      if (response.data) {
        setFilteredResponse(response.data); // Store the filtered data from the response
      } else {
        setErrorMessage('No data found for the selected filter.');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setErrorMessage('Invalid JSON input or error in the backend.');
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

