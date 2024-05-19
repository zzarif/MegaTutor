const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routers/authRouter"));
app.use(require("./routers/parentRouter"));
app.use(require("./routers/tutorRouter"));
app.use(require("./routers/adminRouter"));
app.use(require("./routers/stripeRouter"));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
