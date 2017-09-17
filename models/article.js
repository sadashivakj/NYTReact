var mongoose = require('mongoose')
var Schema = mongoose.Schema


var articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date
    },
    url: {
       type: String,
       required: true,
       unique: true 
    }
})

var articleModel = mongoose.model('Article', articleSchema)

module.exports = articleModel