const get_index = (req, res) => {
    res.render('index', { title: 'Members Only | Project', user: req.user });
}

module.exports = { get_index }