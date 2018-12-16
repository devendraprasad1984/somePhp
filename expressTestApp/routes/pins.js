var path = require('path')
var pin = require('../models/pins')

var esPins = function (app) {
    app.route("/pins/create")
        .get(function (req, res, next) {
            res.render('pins/create')
        })
        .post(function (req, res, next) {
            var pinObj = new pin()
            pinObj.title = req.body.title
            pinObj.desc = req.body.desc
            pinObj.username = req.body.username
            pinObj.path = req.body.path
            pinObj.isSave = false

            if (!req.files)
                return json('error')

            var sampleFile = req.files.sampleFile
            var fileName = Math.random().toString(26).slice(2) + ".jpg"
            var path = "./public/Files/" + fileName
            pinObj.path = '/Files/' + fileName
            sampleFile.mv(path, function (err) {
                if (err) {
                    return res.status(500).send(err)
                }
            })
            pinObj.save(function (err) {
                res.redirect('/pins/index')
            })
        })
    app.route("/pins/index").get(function (req, res, next) {
        pin.find({}, function (err, allPins) {
            res.render("pins/index", {pins: allPins})
        })
    })
    app.get("/pins/delete/:id", function (req, res, next) {
        pin.find({_id: req.params.id}).remove().exec(function (err, foundPin) {
            res.redirect('/pins/index')
        })
    })

    app.get("/pins/details/:id", function (req, res, next) {
        pin.findOne({_id: req.params.id}).exec(function (err, oneRec) {
            res.render('pins/details', {oneRec: oneRec})
        })
    })

    app.get("/pins/save/:id", function (req, res, next) {
        pin.findOne({_id: req.params.id}, function (err, foundPin) {
            if (foundPin) {
                foundPin.isSave = !foundPin.isSave
                foundPin.save(function (err) {
                    if (err) return next(err)
                    res.redirect('/pins/details/' + foundPin._id)
                })
            }
        })
    })

    app.route("/pins/edit/:id")
        .get(function (req, res, next) {
            pin.findOne({_id: req.params.id}).exec(function (err, oneRec) {
                res.render('pins/edit', {pin: oneRec})
            })
        })
        .post(function (req, res, next) {
            pin.findOne({_id: req.params.id}, function (err, foundPin) {
                if (foundPin) {
                    foundPin.title = req.params.title
                    foundPin.desc = req.params.desc
                    foundPin.save(function (err) {
                        if (err) return next(err)
                        res.redirect('/pins/details/' + foundPin._id)
                        // res.render('pins/details', {oneRec: foundPin})
                    })
                }
            })
            console.log(req, res, next)
        })

    app.get('/pins/saved-pins', function (req, res, next) {
        pin.find({isSave: true}, function (err, pins) {
            if (err) return next(err)
            res.render('pins/index', {pins: pins})
        })
    })
    app.get('/pins/search-pins', function (req, res, next) {
        foundByTitle=0
        pin.find({title: {"$regex":req.query['search'],"$options":"1"}}, function (err, pins) {
            if (err) return next(err)
            foundByTitle=1
            res.render('pins/index', {pins: pins})
        })
        if(foundByTitle==0){
            pin.find({username: {"$regex":req.query['search'],"$options":"1"}}, function (err, pins) {
                if (err) return next(err)
                res.render('pins/index', {pins: pins})
            })
        }
    })

}

module.exports = esPins
