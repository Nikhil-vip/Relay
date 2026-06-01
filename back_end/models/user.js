const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userschema = new mongoose.Schema({
  username: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
  },
  password: {
    type: string,
    required: true
  }
},
  { timestamps: true }
);
userschema.pre('save', async function () {
  if (!this.modified('password')) return;

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
