const Post = require('../models/posts');
const User = require('../models/users');

const get_index = async (req, res) => {
    const posts = await Post.find().populate('author').exec()
    // const user = await User.find();
    // console.log(user)
    res.render('index', { title: 'Members Only | Project', user: req.user, posts: posts, admin: req.user });
}

module.exports = { get_index }