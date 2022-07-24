const rideService = require("../services/ride.service");

// Creating a new rider
exports.createRide = (req, res) => {
  const rider = req.body;

  rideService
    .createRide(rider)
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .json({
          success: false,
          error: "Creating a ride failed",
          message: err,
        });
    });
};

// Get ride details by Driver
exports.getRideDetails = (req, res) => {
  const rider = req.params.ride_id;

  rideService
    .getRideDetails(rider)
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
  ride = req.body;

  rideService
    .updatePartners(ride)
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
  ride = req.body.assigned_rider;

  rideService
    .deleteRide(ride)
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
  rideId = req.body.ride_id;
  partnerId = req.body.partner_id;

  rideService
    .deletePartner(rideId, partnerId)
    .then((rider) => {
      res.status(200).json({ success: true, data: rider });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Deleting Ride Partner failed" });
    });
};
