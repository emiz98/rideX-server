const User = require("../models/User");
const Client = require("../models/Client");

// Creating a new client request
exports.createClientRequest = async (client, client_id) => {
  client.request_partner = client_id;

  const isClientExists = await Client.exists({
    request_partner: client.request_partner,
  });

  if (isClientExists) {
    return null;
  } else {
    const newClientRequest = await Client.create(client);
    return newClientRequest;
  }
};

// Getting a client request using client id
exports.getClientRequest = async (client_id) => {
  const query = { request_partner: client_id };

  const client = await Client.findOne(query)
    .populate("assigned_rider", "username email number location")
    .populate("request_partner", "username email number location");

  if (client.length === 0) {
    return null;
  } else {
    return client;
  }
};

// Getting all client request
exports.getAllClientRequests = async () => {
  // Filter by date and time
  const clients = await Client.find();

  return clients;
};

// Deleting a client request
exports.deleteClient = async (clientId) => {
  const query = { request_partner: clientId };

  const response = await Client.findOneAndDelete(query);

  return response;
};
