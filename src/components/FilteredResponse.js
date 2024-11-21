import React from 'react';

const FilteredResponse = ({ data, filter }) => {
  let filteredData = data;

  // Filter based on the selected filter
  if (filter === 'Numbers') {
    filteredData = filteredData.filter(item => !isNaN(item));
  }
  if (filter === 'Alphabets') {
    filteredData = filteredData.filter(item => /^[A-Za-z]+$/.test(item));
  }
  if (filter === 'Highest lowercase alphabet') {
    const lowercaseAlphabets = filteredData.filter(item => /[a-z]/.test(item));
    const highest = lowercaseAlphabets.reduce((max, current) => (current > max ? current : max), '');
    filteredData = [highest];
  }

  return (
    <div>
      <h3>Filtered Response</h3>
      <p>{filteredData.join(', ')}</p>
    </div>
  );
};

export default FilteredResponse;
