const User = require("../Models/User");

module.exports = async (req, res) => {

    console.log(req.session.userId);

    const { firstname, lastname, License_No, Age, manufacturer, model, year, plate_no } = req.body;

    console.log(`finding by${req.session.userId}`);

    await User.findByIdAndUpdate(req.session.userId, { firstname, lastname, License_No, Age, car_details: { manufacturer, model, year, plate_no } })

    res.redirect("/g2")
}