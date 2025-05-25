// Project model
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  phases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Phase' }],
  macroTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MacroTask' }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
