const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
// const bcrypt = require('bcryptjs');

// GET login page
router.get('/', (req, res, next) => {
    res.render('login');
})

router.post('/', 
    passport.authenticate("local", {
        successRedirect: '/',
        failureRedirect: '/'
    })
)


module.exports = router;