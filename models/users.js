const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    can_post: { type: Boolean, default: false },
    date_created: { type: Date },
    posts: [{ type: mongoose.Schema.Types.Array, ref: 'Post' }],
    admin: { type: Boolean, default: false }
})

UserSchema.virtual('name').get(() => {
    let fullname = "";
    if(this.first_name && this.last_name) {
        fullname = `${this.last_name}, ${this.first_name}`;
    }

    return fullname;
})

module.exports = mongoose.model('User', UserSchema);