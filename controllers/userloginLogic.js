const User = require('../Models/User');
const bcrypt = require('bcrypt');
global.userType = null;

module.exports = async (req, res) => {
    console.log('logging in user');
    let { username, password } = req.body;



    User.findOne({ username: username }, (error, user) => {
        if (user) {
            console.log('FOUND USER ' + user);

            


            bcrypt.compare(password, user.password, (error, same) => {

                if (same) {
                    req.session.userId = user._id;
                    userType = user.userType;

                    console.log('password is correct');
                    res.redirect('/')
                } else {


                    console.log('password incorrect');
                    var error_message = 'password incorrect';
                    res.redirect('/login', { error_message })
                }
            })
        } else {
            res.redirect('/login')
        }
    })
}








