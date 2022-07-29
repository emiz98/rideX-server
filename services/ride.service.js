const Ride = require("../models/Ride");
const getNearbyUsers = require("../utils/getNearby");
const Client = require("../models/Client");
const clientService = require("./client.service");

// Creating a new ride
exports.createRide = async (rider, rider_id) => {
  rider.assigned_rider = rider_id;

  const isRideExits = await Ride.exists({
    assigned_rider: rider.assigned_rider,
  });
  const isClientExits = await Client.exists({
    request_partner: rider.assigned_rider,
  });

  if (isRideExits || isClientExits) {
    throw 400;
  } else {
    const newRide = await Ride.create(rider);
    return newRide;
  }
};

// Getting a ride using driderID
exports.getRideDetails = async (rider) => {
  const query = { assigned_rider: rider };

  const ride = await Ride.findOne(query)
    .populate("assigned_rider", "username email number location")
    .populate("assigned_partners", "username email number location");

  if (ride.length === 0) {
    return null;
  } else {
    return ride;
  }
};

// Updating the assigned partners for the ride
exports.updatePartners = async (partner, email, id) => {
  const rideQuery = { email: email };
  const clientQuery = { request_partner: partner };

  const updateRide = { $addToSet: { assigned_partners: partner } };
  const updateClient = { $addToSet: { assigned_rider: id } };

  const updatedRide = await Ride.findOneAndUpdate(rideQuery, updateRide);
  const UpdatedClient = await Client.findOneAndUpdate(
    clientQuery,
    updateClient
  );

  return updatedRide;
};

// Deleting a ride by rideID
exports.deleteRide = async (riderId) => {
  const query = { assigned_rider: riderId };

  const clientResponse = await Client.updateMany(query, {
    $unset: { assigned_rider: "" },
  });
  const rideResponse = await Ride.findOneAndDelete(query);

  return rideResponse;
};

// Delete a ride partner by partner id
exports.deletePartner = async (riderId, partnerId) => {
  const query = { assigned_rider: riderId };

  const clientResponse = await Client.updateOne(query, {
    $unset: { assigned_rider: "" },
  });
  const ride = await Ride.updateOne(query, {
    $pullAll: { assigned_partners: [partnerId] },
  });
};

// Get nearby partners for the ride(Using rideId)
exports.getNearby = async (rider_email) => {
  const query = { email: rider_email };
  const radius = 2;

  const ride = await Ride.findOne(query).populate(
    "assigned_rider",
    "username email number location"
  );

  const clientRequests = await clientService.getAllClientRequests();

  if (ride.length === 0 || clientRequests.length === 0) {
    return null;
  } else {
    const nearbyUsers = getNearbyUsers(
      radius,
      ride.assigned_rider.location,
      clientRequests
    );
    return nearbyUsers;
  }

  // Format to return
  // {
  //     nearbyUsers: [client array],
  //     Trip Details
  // }
};
