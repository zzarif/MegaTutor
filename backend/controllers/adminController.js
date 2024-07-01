const { collection, getDocs, where, query, getDoc, updateDoc, doc } = require("firebase/firestore");
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

const updateUser = async (req, res) => {
  const { email, name, phone } = req.body;

  try {
    const snapshot = await getDoc(
      query(
        collection(db, process.env.USERS_COLLECTION),
        where("email", "==", email)
      )
    );

    await updateDoc(doc(db, process.env.USERS_COLLECTION, snapshot.id), {
      name: name,
      phone: phone,
    });

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(401).json({ error: "Error updating user:" });
  }
};

module.exports = {
  getAllJobs,
  getAllParents,
  getAllTutors,
  updateUser,
};
