const User = require('../Models/User')
module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {

        if (user.userType === 'Driver' || "Admin" || "Examiner") {
            res.locals.user = user;
            next();

        } else {

            console.log('not auhorized to this userType');
            res.redirect('/')
            return
        }


    })
}