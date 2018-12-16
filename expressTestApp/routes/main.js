module.exports = function (app) {
    app.get("/", function (req, res, next) {
        // res.json("hello from mode")
        res.redirect("/pins/index")
        // res.render("pins/index")
    })
}