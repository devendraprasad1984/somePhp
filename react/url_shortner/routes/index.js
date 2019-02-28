var express = require('express');
var router = express.Router();
var urlShorterModel=require('../models/urlshortner')

const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/url_shortner";
const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
};
//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) =>
{
  if (err) console.log(`Error`, err);
  console.log(`Connected to MongoDB`);
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



//
// // Require express module
// const express = require("express");
// const app = express();
// const PORT = 7000;
// //Start server on Port 7000
// app.listen(PORT, () => {
//   console.log(`Server started on port`, PORT);
// });


//    "start": "node ./bin/www",
// "start": "nodemon index.js"
