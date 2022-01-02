const router = require('express').Router();

// Links noteRoutes.js to index.js
router.use(require('./noteRoutes'));

module.exports = router;