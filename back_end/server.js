require('dotenv').config();
const authRotes = require('./routes/auth_routes.js')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRotes);


mongoose.connect(process.env.mongo_uri)

  .then(() => console.log("connected to db"))
  .catch((err) => console.error("Error connecting to db:", err));


app.get('/', (req, res) => {

  res.send("hiiii")

});

app.listen(3000, () => {

  console.log("server running on port 3000");

})
module.exports = app;