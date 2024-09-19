const fs = require('fs');
const pdfParse = require('pdf-parse');
const axios = require('axios');

// Controller for handling file uploads and calling Flask API
exports.uploadFile = async (req, res) => {
    const document = req.file;

    try {
        // Read and parse PDF file
        const dataBuffer = fs.readFileSync(document.path);
        const data = await pdfParse(dataBuffer);
        const documentText = data.text;  // Extracted text from PDF

        // Send extracted text to Flask API for summarization
        const response = await axios.post('http://localhost:5000/summarize', {
            text: documentText
        });

        // Respond with summarized text and highlights
        res.json(response.data);

    } catch (error) {
        console.error('Error processing document:', error);
        res.status(500).send('Error processing document');
    }
};
