const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello wlorde");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT);
