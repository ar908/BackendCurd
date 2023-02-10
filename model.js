const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    article: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
})

module.exports = new mongoose.model('articles', schema)