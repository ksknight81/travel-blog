const router = require('express').Router();
const {Comment, User, Post} = require('../../models/');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'comment_text'],
        include: [{
            model: User,
            attributes: ['username']
        }, {
            model:Post,
            attributes: ['title']
        }]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// 
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'comment_text'],
        include: [{
            model: User,
            attributes: ['username']
        }, {
            model: Post,
            attributes: ['title']
        }]
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new post
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }        
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({message: 'No comment found with that id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
