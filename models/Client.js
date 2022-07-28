const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

// This is for the clients(partners who will join with the driver)
const ClientSchema = new Schema({
    assigned_rider: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    request_partner : {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    depart_date: Date,
    depart_time: Date,
    depart_to: {
        lat: Number,
        long: Number
    },
    created_at: Date,

});

module.exports = models.Client || model("Client", ClientSchema);