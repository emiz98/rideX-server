exports.getEndpoints = (req, res) => {
  res.send({
    header: "Available endpoints",
    user: [
      {
        "Sign up(POST)": "/auth/signup",
        "Sign in(POST)": "/auth/login",
        "Get Users(GET)": "/users",
        "Get user(GET)": "/user",
        "Update User(PUT)": "/user/update",
        "Delete User(DELETE)": "/user/delete",
      },
    ],
    ride: [
      {
        "Create a ride(POST)": "/ride/create", //TODO Check for client req
        "Get active ride(GET)": "/ride",
        "Add partner(PUT)": "/ride/partner/add",
        "Delete partner(DELETE)": "/ride/partner/delete",
        "GET nearby requests(GET)": "/ride/get_nearby", //TODO Incomplete
        "Delete ride(DELETE)": "/ride/delete", //TODO don't send data
      },
    ],
    client: [
      {
        "Create a request(POST)": "/client/create", //TODO Check for ride req
        "Get active client request(GET)": "/client",
        "Delete client request(GET)": "/client/delete", //TODO don't send data
        "Assign a rider(PUT)": "/client/assign", //TODO Assign a rider
        "Get active ride after assigning(GET)": "/client/ride", //TODO Populate rider and other members
      },
    ],
  });
};
