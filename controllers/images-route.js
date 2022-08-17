const router = require('express').Router();
const { getImage } = require('../s3');

router.get('/:key', (req, res) => {
    const key = req.params.key;
    const readStream = getImage(key);

    readStream.pipe(res)
});

module.exports = router;