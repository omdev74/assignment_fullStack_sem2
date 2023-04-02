const User = require("../Models/User");



module.exports = async (req, res) => {

    console.log(req.body);
    const { License_No, manufacturer, model, year, plate_no } = req.body;

    await User.findOneAndUpdate({ License_No }, { car_details: { manufacturer, model, year, plate_no } })

    res.redirect("/g")
}