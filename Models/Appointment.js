const mongoose = require('mongoose')


const AppointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    isTimeSlotAvailable: Boolean,
    time: String,
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;