
const Appointment = require('../Models/Appointment');


module.exports = async (req, res) => {



    if (res.locals.user.userType != "Admin") {
        res.redirect('/404')

        return
    }
    else {
        let { date, time } = req.body;
        console.log(
            req.body.date
        );
        var error_message;
        await Appointment.create({
            date: date,
            time: time,
            isTimeSlotAvailable: true,
        }, (error, AppointmentTimeSlot) => {
            console.log('time slot saved: ', error, AppointmentTimeSlot);
            if (error) {
                error_message = 'Error detected';
                res.render('appointment', { error_message });
                return;
            }
            else {
                res.redirect('/');
                return;
            }

        })
    }


}

