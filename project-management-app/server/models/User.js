// User model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'project_manager', 'developer'], default: 'developer' },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  unavailablePeriods: [{
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    reason: { type: String }
  }]
});

module.exports = mongoose.model('User', userSchema);
