const express = require("express");
const {
  getAllJobs,
  getAllParents,
  getAllTutors,
} = require("../controllers/adminController");

const adminRouter = express.Router();

adminRouter.get("/getAllJobs", getAllJobs);
adminRouter.get("/getAllParents", getAllParents);
adminRouter.get("/getAllTutors", getAllTutors);

module.exports = adminRouter;
