const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    catgory: String,
    image: String,
    publishedAt: Date
});

module.exports = mongoose.model('Article', articleSchema)