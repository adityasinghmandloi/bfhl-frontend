import React, { useState } from 'react';
import axios from 'axios';
import { validateJson } from '../utils/validateJson';

const Form = ({ setResponse }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { valid, parsed, error: validationError } = validateJson(input);

        if (!valid) {
            setError(validationError);
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/bfhl', parsed);
            setResponse(res.data);
            setError(''); // Clear errors if successful
        } catch (err) {
            setError('Server Error: Unable to process the request.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter JSON here'
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;
