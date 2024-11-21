import React from 'react';
import Select from 'react-select';

const Response = ({ response }) => {
    const options = [
        { value: 'numbers', label: 'Numbers' },
        { value: 'alphabets', label: 'Alphabets' },
        { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' },
    ];

    return (
        <div>
            <h2>Response</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
            <Select options={options} isMulti />
        </div>
    );
};

export default Response;
