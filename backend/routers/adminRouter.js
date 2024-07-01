const express = require("express");
const {
  getAllJobs,
  getAllParents,
  getAllTutors,
  updateUser
} = require("../controllers/adminController");

const adminRouter = express.Router();

adminRouter.get("/getAllJobs", getAllJobs);
adminRouter.get("/getAllParents", getAllParents);
adminRouter.get("/getAllTutors", getAllTutors);
adminRouter.post("/updateUser", updateUser);

module.exports = adminRouter;
