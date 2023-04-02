const User = require("../Models/User");




module.exports = async (req, res) => {

    let userData = await User.findById(req.session.userId)
    console.log(userData);


    if (res.locals.user.userType != "Driver") {
        res.redirect('/404')

        return
    }
    else {
        res.render("g2", { user: userData });
    }




}