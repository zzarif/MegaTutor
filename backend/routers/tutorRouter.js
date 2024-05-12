const express = require("express");
const {
  getAvailableJobs,
  applyForJob,
  getMyApplications,
  getMyJobs,
} = require("../controllers/tutorController");
var stripeController = require("../src/controllers/stripeController");

const tutorRouter = express.Router();

tutorRouter.get("/getAvailableJobs", getAvailableJobs);
tutorRouter.post("/applyForJob", applyForJob);
tutorRouter.get("/getMyApplications", getMyApplications);
tutorRouter.get("/getMyJobs", getMyJobs);
var stripeController = require("../src/controllers/stripeController");
module.exports = tutorRouter;
