var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const Post = require('../models/posts');
const User = require('../models/users');

/* GET home page. */
router.get('/', indexController.get_index);

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err)
    })
    res.redirect('/')
})

// POST to posts
router.post('/', async (req, res, next) => {
    try {
        const post = new Post({
            author: req.user._id,
            content: req.body.post,
            date: new Date()
        })

        const result = await post.save();

        await User.findByIdAndUpdate(
            req.user._id,
            { $push: { posts: [result._id, result.content] } },
            { new: true }
          );

        res.redirect('/')
    } catch (err) {
        return next(err);
    }
})

module.exports = router;
