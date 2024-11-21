export const validateJson = (input) => {
    try {
        // Attempt to parse the input as JSON
        const parsed = JSON.parse(input);

        // Ensure the parsed JSON is an object and contains the "data" key
        if (!parsed || typeof parsed !== 'object' || !parsed.data) {
            throw new Error('Invalid JSON format: "data" key missing.');
        }

        // Ensure "data" is an array
        if (!Array.isArray(parsed.data)) {
            throw new Error('Invalid JSON format: "data" should be an array.');
        }

        return { valid: true, parsed };
    } catch (err) {
        return { valid: false, error: err.message };
    }
};
