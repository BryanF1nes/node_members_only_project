const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ username: username })
        if (!user) return done(null, false, { message: 'Incorrect username' })

        const match = await bcrypt.compare(password, user.password);
        if (!match) return done(null, false, { message: 'Incorrect password' })

        return done(null, user)
    } catch (err) {
        done(err);
    }
}));

module.exports = passport;

