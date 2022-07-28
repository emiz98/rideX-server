require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./passport/passport-local.strategy");
const database = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Welcome to rideX server");
});

app.use("/api/v1", require("./routes/ridex_v1.routes"));

const port = process.env.PORT || 8080;
app.listen(port, process.env.IP_GATEWAY || "localhost", () =>
  console.log(
    `RideX Listening on IP ${process.env.IP_GATEWAY} and PORT ${port}`
  )
);
