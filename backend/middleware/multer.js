const multer = require('multer');

// Store the file in memory (no local saving)
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
