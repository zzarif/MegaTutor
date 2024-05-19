const {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  where,
  query,
  getDoc,
  doc,
  updateDoc,
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
    const promises = snapshot.docs.map(async (job) => {
      const applications = await getDocs(
        query(
          collection(db, process.env.APPLICATIONS_COLLECTION),
          where("jobId", "==", job.id)
        )
      );
      const tutor = await getDoc(
        doc(
          db,
          process.env.USERS_COLLECTION,
          applications.docs[0].data().tutorId
        )
      );
      return {
        applicationId: applications.docs[0].id,
        jobId: job.id,
        ...tutor.data(),
        ...job.data(),
      };
    });
    const appliedTutors = await Promise.all(promises);
    res.status(200).json(appliedTutors);
  } catch (error) {
    console.error("Error fetching applied tutors:", error);
    res.status(500).json({ error: "Failed to applied tutors." });
  }
};

const confirmJob = async (req, res) => {
  const { jobId, applicationId } = req.query;
  try {
    await updateDoc(doc(db, process.env.JOBS_COLLECTION, jobId), {
      status: "confirmed",
    });
    await updateDoc(
      doc(db, process.env.APPLICATIONS_COLLECTION, applicationId),
      {
        status: "confirmed",
      }
    );
    res.status(200).send(`Payment Successful and Tutor confirmed. <a href="https://megatutor.vercel.app/confirmed-tutors">View status</a>.`);
  } catch (error) {
    console.error("Error confirming job:", error);
    res.status(500).json({ error: "Failed to confirm job." });
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
    const promises = snapshot.docs.map(async (job) => {
      const applications = await getDocs(
        query(
          collection(db, process.env.APPLICATIONS_COLLECTION),
          where("jobId", "==", job.id)
        )
      );
      const tutor = await getDoc(
        doc(
          db,
          process.env.USERS_COLLECTION,
          applications.docs[0].data().tutorId
        )
      );
      return {
        applicationId: applications.docs[0].id,
        jobId: job.id,
        ...tutor.data(),
        ...job.data(),
      };
    });
    const appliedTutors = await Promise.all(promises);
    res.status(200).json(appliedTutors);
  } catch (error) {
    console.error("Error fetching confirmed tutors:", error);
    res.status(500).json({ error: "Failed to confirmed tutors." });
  }
};

module.exports = {
  postNewJob,
  getPostedJobs,
  getAppliedTutors,
  confirmJob,
  getConfirmedTutors,
};
