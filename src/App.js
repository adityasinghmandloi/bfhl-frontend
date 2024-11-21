import React, { useState } from 'react';
import Form from './components/Form';
import Response from './components/Response';

const App = () => {
    const [response, setResponse] = useState(null);

    return (
        <div>
            <h1>ABCD123</h1>
            <Form setResponse={setResponse} />
            {response && <Response response={response} />}
        </div>
    );
};

export default App;
