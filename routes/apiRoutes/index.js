const router = require('express').Router();

// add routes definitions here
const commentRoutes = require('./commentRoutes');

// call out routers here
router.use('/comments', commentRoutes);

module.exports = router;