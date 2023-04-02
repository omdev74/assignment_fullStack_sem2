

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var uniqueValidator = require("mongoose-unique-validator");
const UserSchema = new mongoose.Schema({
    firstname: { type: String, default: "default" },
    lastname: { type: String, default: "default" },
    License_No: { type: String, default: "default" },
    Age: { type: Number, default: 0 },
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
    },
    userType: {
        type: String,
        required: true,
    },

    car_details: {
        manufacturer: { type: String, default: "default" },
        model: { type: String, default: "default" },
        year: { type: Number, default: 0 },
        plate_no: { type: String, default: "default" },
    },
    appointment_id: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: false,
    },
});

UserSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    });
});
UserSchema.plugin(uniqueValidator);

const User = mongoose.model("User", UserSchema)



module.exports = User;