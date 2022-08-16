const router = require("express").Router();

router.get('/', (req, res) => {
    res.render('new-post')
});

module.exports = router;