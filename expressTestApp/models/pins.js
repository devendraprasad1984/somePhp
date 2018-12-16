var mongoose = require('mongoose')
var schema = mongoose.Schema
var pinschema = new schema({
    title: String,
    desc: String,
    username: String,
    path: String,
    isSave: Boolean
})

module.exports = mongoose.model('pin', pinschema)
