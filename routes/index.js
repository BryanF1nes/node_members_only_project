var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.get_index);

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err)
    })
    res.redirect('/')
})

module.exports = router;
