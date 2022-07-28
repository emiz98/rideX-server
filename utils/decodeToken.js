const jwtDecode = require("jwt-decode");


exports.getEmail = (req) => {
    const token = req.headers.authorization.split(" ")[1];

    const payload = jwtDecode(token)

    email = payload.user.email;

    return email
}

exports.getId = (req) => {
    const token = req.headers.authorization.split(" ")[1];

    const payload = jwtDecode(token)

    id = payload.user._id;

    return id
}