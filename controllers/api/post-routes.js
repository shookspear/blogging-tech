const router = require('express').Router();
const { User, Post, Comment } = require("../../models");
const userAuth = require('../../utils/userAuth');

//GET all route
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'details',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET Post by ID
router.get('/:id', (req, res) => {
    Post.findOne({
        attributes: [
            'id',
            'title',
            'details',
            'user_id'
        ],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No Blog Post found with this id' });
            return;
        }
        res.json(data);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST Blog Post
router.post('/', userAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        user_id: req.session.user_id,
        details: req.body.details
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;