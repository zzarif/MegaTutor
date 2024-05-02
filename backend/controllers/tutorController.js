const { FieldValue } = require("firebase/firestore");
const { db } = require("../config/firebase");

const getAvailableJobs = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        db
          .collection(process.env.JOBS_COLLECTION)
          .where("status", "==", "pending")
          .get()
      );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

const applyForJob = async (req, res) => {
  const { jobId, tutorId } = req.body;
  try {
    res.status(200).json(
      db
        .collection(process.env.APPLICATIONS_COLLECTION)
        .add({
          jobId: jobId,
          tutorId: tutorId,
          status: "applied",
          createdAt: FieldValue.serverTimestamp(),
        })
        .then(() => {
          return db.collection(process.env.JOBS_COLLECTION).doc(jobId).update({
            status: "applied",
          });
        })
    );
  } catch (error) {
    console.error("Error applying for job:", error);
    res.status(500).json({ error: "Failed to apply for job." });
  }
};

const getCurrentApplications = async (req, res) => {
  const { tutorId } = req.body;
  try {
    res
      .status(200)
      .json(
        db
          .collection(process.env.APPLICATIONS_COLLECTION)
          .where("tutorId", "==", tutorId)
          .where("status", "==", "applied")
          .get()
      );
  } catch (error) {
    console.error("Error fetching current applications:", error);
    res.status(500).json({ error: "Failed to current applications." });
  }
};

const getMyJobs = async (req, res) => {
  const { tutorId } = req.body;
  try {
    res
      .status(200)
      .json(
        db
          .collection(process.env.APPLICATIONS_COLLECTION)
          .where("tutorId", "==", tutorId)
          .where("status", "==", "confirmed")
          .get()
      );
  } catch (error) {
    console.error("Error fetching my jobs:", error);
    res.status(500).json({ error: "Failed to fetch my jobs." });
  }
};

module.exports = {
  getAvailableJobs,
  applyForJob,
  getCurrentApplications,
  getMyJobs,
};
