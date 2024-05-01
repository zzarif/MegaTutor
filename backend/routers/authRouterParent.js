const express = require("express");
const {
  registerParent,
  loginParent,
} = require("../controllers/authControllerParent");

const authRouterParent = express.Router();

authRouterParent.post("/registerParent", registerParent);
authRouterParent.post("/loginParent", loginParent);

module.exports = authRouterParent;
