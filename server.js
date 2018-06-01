const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// Initialize app
const app = express();
// DB Config
const db = require("./config/keys").mongoURI;
console.log(db);
// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello world"));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
