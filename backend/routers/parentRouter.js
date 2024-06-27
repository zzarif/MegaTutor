const express = require("express");
const {
  postNewJob,
  getPostedJobs,
  getAppliedTutors,
  confirmJob,
  declineJob,
  getConfirmedTutors,
} = require("../controllers/parentController");

const parentRouter = express.Router();

parentRouter.post("/postNewJob", postNewJob);
parentRouter.get("/getPostedJobs", getPostedJobs);
parentRouter.get("/getAppliedTutors", getAppliedTutors);
parentRouter.get("/confirmJob", confirmJob);
parentRouter.post("/declineJob", declineJob);
parentRouter.get("/getConfirmedTutors", getConfirmedTutors);

module.exports = parentRouter;
