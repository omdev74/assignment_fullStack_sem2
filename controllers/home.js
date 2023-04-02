module.exports = (req, res) => {
    console.log("showing the session cookie at time of home---------------------------");
    console.log(req.session);
    res.render("index");


};