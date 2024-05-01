const express = require("express");
const {
  registerTutor,
  loginTutor,
} = require("../controllers/authControllerTutor");

const authRouterTutor = express.Router();

authRouterTutor.post("/registerTutor", registerTutor);
authRouterTutor.post("/loginTutor", loginTutor);

module.exports = authRouterTutor;
