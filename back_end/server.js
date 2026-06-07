const express = require('express');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.mongo_uri)
  .then(() => console.log("connected to db"))
  .catch((err) => console.error("Error connecting to db:", err));
app.get('/', (req, res) => {
  res.send("hiiii")
});
app.listen(3000, () => {
  console.log("server running on port 3000");
})