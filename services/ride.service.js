const User = require('../models/User');
const Ride = require('../models/Ride');


// Creating a new ride
exports.createRide = async (rider) => {

    const { 
        assigned_rider,
    } = rider

    const isRiderExits = await Ride.exists({ assigned_rider: assigned_rider });


    if (isRiderExits) {
        return null;
    } else {
        const newRide = await Ride.create(rider);
        return newRide
    }

}

// Getting a ride using rideID
exports.getRideDetails = async (rider) => {
    const query = { assigned_rider: rider }

    const ride = await Ride.find(query)
        .populate("assigned_rider", "username email number location")
        .populate("assigned_partners", "username email number location")

    if (ride.length === 0) {
        return null
    }
    else {
        return ride
    }

}

// Updating the assigned partners for the ride
exports.updatePartners = async (ride) => {
    const query = { assigned_rider: ride.assigned_rider };
    const update = { $addToSet: { assigned_partners: ride.assigned_partners } };

    const updatedRide = await Ride.findOneAndUpdate(query, update);

    return updatedRide
}

// Deleting a ride by rideID
exports.deleteRide = async (rideId) => {
    const query = { assigned_rider: rideId }

    const response = await Ride.findOneAndDelete(query)

    return response
}

// Delete a ride partner by partner id
exports.deletePartner = async (rideId, partnerId) => {
    const query = { _id: rideId}

    const ride = await Ride.updateOne(query, {$pullAll: { assigned_partners: [partnerId]}})

}


// Get nearby partners for the ride(Using rideId)
exports.getNearby = async (rideId) => {
    const users = await User.find({_id: {$ne}})
}