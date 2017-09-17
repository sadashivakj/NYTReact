var express = require('express')
var path = require('path')
var Article = require('./models/article.js')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

mongoose.connect('mongodb://heroku_10sh2371:ot11bg7eeo4885ca04a38rl0hb@ds129434.mlab.com:29434/heroku_10sh2371')

var app = express()

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.json({extended: false}))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.get('/saved', function(req, res) {
    Article.find({}).then(function(articles) {
        res.json(articles)
    })
})

app.post('/save', function(req, res) {
    console.log(req.body)
    Article.create(req.body, function(err, response) {
        if (err) {
            console.log(err)
            res.json({failed: true})
        }
        else {
            res.json(response)
        }
    })
})

app.post('/delete', function(req, res) {
    Article.deleteOne(req.body, function(err){
        if(err){
            console.log(err)
            res.json({deleted: false})
        } else {
            res.json({deleted: true})
        }
    })
})

app.listen(8080, function() {
    console.log('running')
})