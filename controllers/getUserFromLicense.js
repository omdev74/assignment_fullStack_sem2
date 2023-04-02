
const User = require('../Models/User');


module.exports = async (req, res) => {
    const License_No = req.query.License_No;


    const Users = await User.findOne({ License_No })
    console.log(License_No);
    res.json(Users);
}