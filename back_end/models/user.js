const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);
userschema.pre('save', async function () {
  if (!this.ismodified('password')) return;

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  catch (err) {
    throw err;
  }
}
);
module.exports = mongoose.model('User', userschema);
