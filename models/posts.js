const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    date_created: { type: Date }
})

module.exports = mongoose.model('Post', PostSchema);