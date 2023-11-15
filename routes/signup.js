const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

// GET sign up page
router.get('/', (req, res, next) => {
    res.render('signup')
});


// POST sign up page
router.post('/', async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            date_created: new Date(),
        })
        const result = await user.save();
        res.redirect('/login');
    } catch (err) {
        return next(err);
    }
})
module.exports = router