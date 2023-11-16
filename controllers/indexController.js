const Post = require('../models/posts');
const User = require('../models/users');

const get_index = async (req, res) => {
    const posts = await Post.find().populate('author').exec()
    const user = await User.findById(req.user)
    
    if (user) {
        const can_post = user.can_post;
        res.render('index', { title: 'Members Only | Project', user: req.user, posts: posts, admin: req.user, canPost: can_post });
    } else {
        res.render('index', { title: 'Members Only | Project', user: req.user, posts: posts, admin: req.user })
    }

}

module.exports = { get_index }