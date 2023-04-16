const Appointment = require("../Models/Appointment");
const User = require("../Models/User");

module.exports = async (req, res) => {
    if (res.locals.user.userType !== "Driver") {
        res.redirect('/404');
        return;
    } else {
        try {
            const date = req.body.date;
            const time = req.body.time;

            // Find the appointment by date and time
            const appointment = await Appointment.findOne({ date, time });
            if (!appointment) {
                // Error handeling for appointment not found 
                res.redirect('/error');
                return;
            }
            else {
                // Update the isTimeSlotAvailable field to false
                appointment.isTimeSlotAvailable = false;
                await appointment.save();


                // Update the User model with appointment ID
                const user = await User.findOne({ _id: res.locals.user._id });
                user.appointment = appointment._id; // Assign the appointment ID to the User model's appointment field
                await user.save();

                // Redirect to G2_page
                res.redirect('/g2');
            }


        } catch (error) {
            // Handle error
            console.error(error);
            res.redirect('/error');
        }
    }
}