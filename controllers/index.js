const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const signupRoutes = require('./signup-routes.js');
const newPostRoutes = require('./new-post-routes')
const imagesRoutes = require('./images-route')

router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/signup', signupRoutes);
router.use('/new-post', newPostRoutes);
router.use('/images', imagesRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;