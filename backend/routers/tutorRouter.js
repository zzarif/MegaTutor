const express = require("express");
const {
  getAvailableJobs,
  applyForJob,
  getMyApplications,
  getMyJobs,
} = require("../controllers/tutorController");

const tutorRouter = express.Router();

tutorRouter.get("/getAvailableJobs", getAvailableJobs);
tutorRouter.post("/applyForJob", applyForJob);
tutorRouter.get("/getMyApplications", getMyApplications);
tutorRouter.get("/getMyJobs", getMyJobs);
module.exports = tutorRouter;
