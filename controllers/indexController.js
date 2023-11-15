const Post = require('../models/posts');
const User = require('../models/users');

const get_index = async (req, res) => {
    const posts = await Post.find().populate('author').exec()
    res.render('index', { title: 'Members Only | Project', user: req.user, posts: posts });
}

module.exports = { get_index }