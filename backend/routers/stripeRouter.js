const express = require("express");
const { processPayment } = require("../controllers/stripeController");

const stripeRouter = express.Router();

stripeRouter.post("/processPayment", processPayment);

module.exports = stripeRouter;