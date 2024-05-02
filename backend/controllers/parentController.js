const { FieldValue } = require("firebase/firestore");
const { db } = require("../config/firebase");

const postNewJob = async (req, res) => {
  const { parentId, jobData } = req.body;
  try {
    res.status(200).json(
      db.collection(process.env.JOBS_COLLECTION).add({
        parentId: parentId,
        ...jobData,
        status: "pending",
        createdAt: FieldValue.serverTimestamp(),
      })
    );
  } catch (error) {
    console.error("Error posting new job:", error);
    res.status(500).json({ error: "Failed to post new job." });
  }
};

const getPostedJobs = async (req, res) => {
  const { parentId } = req.body;
  try {
    res
      .status(200)
      .json(
        db
          .collection(process.env.JOBS_COLLECTION)
          .where("parentId", "==", parentId)
          .where("status", "==", "pending")
          .get()
      );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

const getAppliedTutors = async (req, res) => {
  const { parentId } = req.body;
  try {
    res
      .status(200)
      .json(
        db
          .collection(process.env.JOBS_COLLECTION)
          .where("parentId", "==", parentId)
          .where("status", "==", "applied")
          .get()
      );
  } catch (error) {
    console.error("Error fetching applied tutors:", error);
    res.status(500).json({ error: "Failed to applied tutors." });
  }
};

const getConfirmedTutors = async (req, res) => {
  const { parentId } = req.body;
  try {
    res
      .status(200)
      .json(
        db
          .collection(process.env.JOBS_COLLECTION)
          .where("parentId", "==", parentId)
          .where("status", "==", "confirmed")
          .get()
      );
  } catch (error) {
    console.error("Error fetching confirmed tutors:", error);
    res.status(500).json({ error: "Failed to confirmed tutors." });
  }
};

module.exports = {
  postNewJob,
  getPostedJobs,
  getAppliedTutors,
  getConfirmedTutors,
};
