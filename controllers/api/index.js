const router = require('express').Router();
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;