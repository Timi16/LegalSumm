const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../controllers/fileController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Destination for uploaded files

// Route to handle file uploads
router.post('/upload', upload.single('document'), uploadFile);

module.exports = router;
