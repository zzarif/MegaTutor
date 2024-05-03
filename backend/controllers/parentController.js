const {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  where,
  query,
} = require("firebase/firestore");
const { db } = require("../config/firebase");

const postNewJob = async (req, res) => {
  const { parentId, jobData } = req.body;
  try {
    await addDoc(collection(db, process.env.JOBS_COLLECTION), {
      parentId: parentId,
      ...jobData,
      status: "pending",
      createdAt: serverTimestamp(),
    });
    res.status(200).json({ message: "Job posted successfully" });
  } catch (error) {
    console.error("Error posting new job:", error);
    res.status(500).json({ error: "Failed to post new job." });
  }
};

const getPostedJobs = async (req, res) => {
  const { parentId } = req.query;
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.JOBS_COLLECTION),
        where("parentId", "==", parentId),
        where("status", "==", "pending")
      )
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

const getAppliedTutors = async (req, res) => {
  const { parentId } = req.query;
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.JOBS_COLLECTION),
        where("parentId", "==", parentId),
        where("status", "==", "applied")
      )
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
  } catch (error) {
    console.error("Error fetching applied tutors:", error);
    res.status(500).json({ error: "Failed to applied tutors." });
  }
};

const getConfirmedTutors = async (req, res) => {
  const { parentId } = req.query;
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.JOBS_COLLECTION),
        where("parentId", "==", parentId),
        where("status", "==", "confirmed")
      )
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
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
