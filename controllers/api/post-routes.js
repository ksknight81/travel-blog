const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../../models');
const sequelize = require('sequelize');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const { uploadImage } = require('../../s3');
const withAuth = require('../../utils/auth');

const fs = require('fs');
const util = require('util');

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
 Post.findOne({
    attributes: 
        ['id',
        'title',
        'travel_date',
        'city', 
        'country', 
        'rating',
        'blog',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
     include: [{
        model: User, 
        attributes: ['username']
     }, {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
     }],
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
        user_id: req.body.user_id,
        username: req.body.username,
        // image: image_path
        image: req.file.filename
    })
    .then((dbPostData) => {
        console.log(req.file)
        uploadImage(req.file);
        // res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create vote
router.put('/upvote', (req, res) => {
    Post.upvote(req.body, {Vote})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
    .then(
        // unlinkFile(`../../${req.file.path}`)

        fs.unlink(`uploads/${req.file.filename}`, err => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('file deleted')
            }
        })
    )
});

router.put('/:id', withAuth, (req, res) => {
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