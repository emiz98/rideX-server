const clientService = require('../services/client.service');
const {getEmail, getId} = require("../utils/decodeToken");

// Creating a new client request
exports.createClientRequest = (req, res) => {
    const client = req.body;

    clientService
        .createClientRequest(client,getId(req))
        .then((client) => {
            res.status(200).json({ success: true, data: client });
        })
        .catch((err) => {
            console.log(err);
            res
                .status(400)
                .json({
                    success: false,
                    error: "Creating a client request failed",
                    message: err,
                });
        });
}


// View client request details by id
exports.getClientRequest = (req, res) => {
    clientService
        .getClientRequest(getId(req))
        .then((client) => {
            res.status(200).json({ success: true, data: client });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                error: "Getting client request details by client failed",
            });
        });
}


// Delete a client request by id
exports.deleteClient = (req, res) => {

    clientService
        .deleteClient(getId(req))
        .then((client) => {
            res.status(200).json({ success: true, data: client });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, error: "Deleting client request failed" });
        });
}