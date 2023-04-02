// We then check if the user is retrieved successfully or if the user doesn ’ t exist, which we direct back to the home page. If the user is a valid user, we
// permit the request and carry on with next().



const User = require('../Models/User')
module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            console.log('no user detected');
            console.log("session before redirect");
            console.log(req.session);
            res.redirect('/')

            return
        }
        else {
            
            next()
        }


    })
}


