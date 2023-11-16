const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', (req, res, next) => {
    res.render('admin', { title: 'Members Only | Admin Page' })
})

router.post('/', async (req, res, next) => {
    const admin = process.env.ADMINCODE

    if (req.body.admincode == admin) {
        await User.findByIdAndUpdate(
            req.user._id,
            { admin: true },
            { new: true }
        )
        res.render('admin', { title: 'Members Only | Admin Page', success: 'You are now an admin.' })
    } else {
        res.render('admin', { title: 'Members Only | Admin Page', success: '' })
    }
})

module.exports = router;