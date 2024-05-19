const { collection, getDocs, where, query } = require("firebase/firestore");
const { db } = require("../config/firebase");

const getAllJobs = async (req, res) => {
  try {
    const snapshot = await getDocs(
      query(collection(db, process.env.JOBS_COLLECTION))
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

const getAllParents = async (req, res) => {
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.USERS_COLLECTION),
        where("role", "==", "Parent or Student")
      )
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

const getAllTutors = async (req, res) => {
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.USERS_COLLECTION),
        where("role", "==", "Tutor")
      )
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

module.exports = {
  getAllJobs,
  getAllParents,
  getAllTutors,
};
