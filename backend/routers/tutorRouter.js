const express = require("express");
const {
  getAvailableJobs,
  applyForJob,
  getCurrentApplications,
  getMyJobs,
} = require("../controllers/tutorController");

const tutorRouter = express.Router();

tutorRouter.get("/getAvailableJobs", getAvailableJobs);
tutorRouter.post("/applyForJob", applyForJob);
tutorRouter.get("/getCurrentApplications", getCurrentApplications);
tutorRouter.get("/getMyJobs", getMyJobs);

module.exports = tutorRouter;
