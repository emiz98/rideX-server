const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Welcome to rideX server");
});

app.use("/api/v1", require("./routes/ridex_v1.routes"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`RideX Listening on PORT ${port}`));
