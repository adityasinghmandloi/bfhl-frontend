import React from 'react';

const TextInput = ({ value, onChange }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter JSON here"
        className="input-field"
      />
    </div>
  );
};

export default TextInput;
