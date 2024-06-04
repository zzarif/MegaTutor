const {
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} = require("firebase/auth");
const { doc, setDoc, getDoc, updateDoc } = require("firebase/firestore");
const { auth, db } = require("../config/firebase");
// const bcrypt = require('bcrypt');

// Register parent
const register = async (req, res) => {
  const { name, phone, email, password, role, result } = req.body;

  try {
    // Check if the user already exists
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);

    if (signInMethods.length > 0) {
      // User already exists
      res.status(400).json({ error: "User already exists" });
    } else {
      // User does not exist, proceed with registration
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      // update the display name
      await updateProfile(user, { displayName: name });

      // Firebase Authentication automatically hashes passwords when registering users.
      // When you use the createUserWithEmailAndPassword function from the Firebase Authentication SDK
      // to create a new user, Firebase handles the password hashing internally.
      // Alternatively can use bcrypt to store hashed password (no need Actually)

      // const saltRounds = 10;
      // const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create a Firestore document for the user
      await setDoc(doc(db, process.env.USERS_COLLECTION, user.uid), {
        name: name,
        phone: phone,
        email: email,
        role: role,
        // password: hashedPassword // use it to store bcrypt password
      });

      res.status(201).json({ message: "User registered successfully", user });

      // verify if tutor
      if(role === "Tutor" && result.hscRegiNo && result.sscRegiNo) {
        await updateDoc(doc(db, process.env.USERS_COLLECTION, user.uid), {
          ...result,
          verified: true,
        });
      }
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

// Login parent
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // when a user logs in using signInWithEmailAndPassword,
    // Firebase automatically compares the provided password with the stored hashed password.
    // You don't need to manually compare the passwords.

    if(user.emailVerified) {
      const docSnap = await getDoc(
        doc(db, process.env.USERS_COLLECTION, user.uid)
      );
  
      const { role } = docSnap.data();
  
      res
        .status(200)
        .json({ message: "User logged in successfully", user, role });
    } else {
      res.status(401).json({ error: "Please verify your email to proceed." });
    }
    
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(401).json({ error: "Invalid email or password" });
  }
};

module.exports = { register, login };
