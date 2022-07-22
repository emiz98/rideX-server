const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

// This is for the driver side
const RideSchema = new Schema({
    assigned_rider: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    assigned_partners: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    vehicle_type: String,
    vehicle_no: String,
    depart_date: Date,
    depart_time: Date,
    depart_to: {
        lat: Number,
        long: Number
    },
    available_seats: Number,
    created_at: Date,
    is_ongoing: Boolean,
    current_temp_location: {
        lat: Number,
        long: Number
    }

});

module.exports = models.Ride || model("Ride", RideSchema);