

const get_index = (req, res) => {
    res.render('index', { title: 'Members Only | Project' });
    console.log(req.user.username)
}

module.exports = { get_index }