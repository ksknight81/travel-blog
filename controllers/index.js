const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const signupRoutes = require('./signup-routes.js');

router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/signup', signupRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;