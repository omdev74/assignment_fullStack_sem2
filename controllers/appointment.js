const User = require("../Models/User");

module.exports = async (req, res) => {

    if (res.locals.user.userType != "Admin") {
        res.redirect('/404')

        return
    }
    else {
        res.render("appointment");
    }



}