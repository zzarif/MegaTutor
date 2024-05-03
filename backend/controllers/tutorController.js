const {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  where,
  query,
  updateDoc,
  doc,
} = require("firebase/firestore");
const { db } = require("../config/firebase");

const getAvailableJobs = async (req, res) => {
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.JOBS_COLLECTION),
        where("status", "==", "pending")
      )
    );
    const availableJobs = [];
    snapshot.docs.forEach((doc) =>
      availableJobs.push({ jobId: doc.id, ...doc.data() })
    );
    res.status(200).json(availableJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};

const applyForJob = async (req, res) => {
  const { jobId, tutorId } = req.body;
  try {
    console.log("Application sent");
    await addDoc(collection(db, process.env.APPLICATIONS_COLLECTION), {
      jobId: jobId,
      tutorId: tutorId,
      status: "applied",
      createdAt: serverTimestamp(),
    }).then(async () => {
      console.log("Application received");
      await updateDoc(doc(db, process.env.JOBS_COLLECTION, jobId), {
        status: "applied",
      });
      console.log("Job status updated");
    });
    console.log("Application success");
    res.status(200).json({ message: "Job application received." });
  } catch (error) {
    console.error("Error applying for job:", error);
    res.status(500).json({ error: "Failed to apply for job." });
  }
};

const getCurrentApplications = async (req, res) => {
  const { tutorId } = req.query;
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.APPLICATIONS_COLLECTION),
        where("tutorId", "==", tutorId),
        where("status", "==", "applied")
      )
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
  } catch (error) {
    console.error("Error fetching current applications:", error);
    res.status(500).json({ error: "Failed to current applications." });
  }
};

const getMyJobs = async (req, res) => {
  const { tutorId } = req.query;
  try {
    const snapshot = await getDocs(
      query(
        collection(db, process.env.APPLICATIONS_COLLECTION),
        where("tutorId", "==", tutorId),
        where("status", "==", "confirmed")
      )
    );
    res.status(200).json(snapshot.docs.map((doc) => doc.data()));
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
