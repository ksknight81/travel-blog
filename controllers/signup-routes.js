const router = require("express").Router();

router.get("/",(req, res) => {
    res.render('sign-up', {})
});

module.exports = router;