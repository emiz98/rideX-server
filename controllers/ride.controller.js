const rideService = require("../services/ride.service");
const { getEmail, getId } = require("../utils/decodeToken");

// Creating a new rider
exports.createRide = (req, res) => {
  const rider = req.body;
  rideService
    .createRide(rider, getId(req))
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        error: "Creating a ride failed",
        message: err,
      });
    });
};

// Get ride details by Driver
exports.getRideDetails = (req, res) => {
  rideService
    .getRideDetails(getId(req))
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        error: "Getting ride details by driver failed",
      });
    });
};

// Update ride partners for a rideTrip
exports.updatePartners = (req, res) => {
  const partner = req.body.partner;

  rideService
    .updatePartners(partner, getEmail(req), getId(req))
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Updating partners to ride failed" });
    });
};

// Delete a Ride by driver ID
exports.deleteRide = (req, res) => {
  rideService
    .deleteRide(getId(req))
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Deleting Ride Trip failed" });
    });
};

// Delete a partner by id
exports.deletePartner = (req, res) => {
  const riderId = getId(req);
  const partnerId = req.body.partner_id;

  rideService
    .deletePartner(riderId, partnerId)
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Deleting Ride Partner failed" });
    });
};

// Get nearby partners for a rider
exports.getNearby = (req, res) => {
  const rider_email = getEmail(req);

  rideService
    .getNearby(rider_email)
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Getting nearby Partners failed" });
    });
};
