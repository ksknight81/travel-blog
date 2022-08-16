const router = require('express').Router();
const { User, Post } = require('../../models');

const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const { uploadImage } = require('../../s3')
// const Post = require('../../models/Post');

// get all comments
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Post.findAll({
    attributes: 
        ['id',
        'title',
        'travel_date',
        'city', 
        'country', 
        'rating',
        'blog'],
     include: {
        model: User, 
        attributes: ['username']
     }
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// 
router.get('/:id', (req, res) => {
 // Access our User model and run .findAll() method)
 Post.findAll({
    attributes: 
        ['id',
        'title',
        'travel_date',
        'city', 
        'country', 
        'rating',
        'blog'],
     include: {
        model: User, 
        attributes: ['username']
     },
     where: {
        id: req.params.id
     }
  })
    .then((dbPostData) => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', upload.single('image'), (req, res) => {

    // const image_path = req.file.path;
    Post.create({
        id: req.body.id,
        title: req.body.title,
        travel_date: req.body.travel_date,
        city: req.body.city,
        country: req.body.country,
        rating: req.body.rating,
        blog: req.body.blog,
        username: req.body.username,
        // image: image_path
        image: req.file.filename
    })
    .then((dbPostData) => {
        console.log(req.file)
        uploadImage(req.file);
        // res.json(dbPostData);
    })
    .then(
        res.send('success')
    )
});

router.put('/:id', (req, res) => {
    Post.update({ 
        id: req.body.id,
        title: req.body.title,
        travel_date: req.body.travel_date,
        city: req.body.city,
        country: req.body.country,
        rating: req.body.rating,
        blog: req.body.blog,
        username: req.body.username
     }, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData[0]) {
            res.status(400).json({ message: 'No post found with this id' });
            return;
        }        
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;