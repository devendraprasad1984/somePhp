var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var ejs = require('ejs')
var engine = require('ejs-mate')
var fileUpload = require('express-fileupload')

var app = express()
// mongo ds117623.mlab.com:17623/pinterest -u <dbuser> -p <dbpassword>
var urlMongo = "mongodb://root:admin1234@ds117623.mlab.com:17623/pinterest"
mongoose.connect(urlMongo, function (err) {
    if (err) {
        console.log("mongo connect error", err)
    } else {
        console.log("connected to mongodb")
    }
})
//some middleware code
app.use(fileUpload())
app.use(express.static(__dirname + "/public"))
app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))


require('./routes/main')(app)
require('./routes/pins')(app)

app.listen(8010, function (err) {
    if (err) {
        console.log("server error", err)
    } else {
        console.log("server connected 8010")
    }
})