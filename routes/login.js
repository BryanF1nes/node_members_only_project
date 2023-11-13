const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// GET login page
router.get('/', (req, res, next) => {
    res.render('login');
})

router.post('/', (req, res, next) => {
    res.send('NOT IMPLEMENTED YET.')
})

module.exports = router;