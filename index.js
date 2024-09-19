const express = require('express');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Routes
app.use('/api', fileRoutes);

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
