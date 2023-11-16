require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/users')

router.get('/', (req, res, next) => {
    res.render('secretpage', { title: 'Members Page | Secret Page', message: '' })
})

router.post('/', async (req, res, next) => {
    const secret = process.env.SECRET
    // const getUser = req.user
    if (req.body.secretcode == secret) {
        await User.findByIdAndUpdate(
            req.user._id,
            { can_post: true },
            { new: true }
        )
        res.render('secretpage', { title: 'Members Page | Secret Page', state: true, message: 'Congrats! You can post now!' })
    } else {
        res.render('secretpage', { title: 'Members Page | Secret Page', state: false, message: "Sorry that's not the secret code!" })
    }
})

module.exports = router;