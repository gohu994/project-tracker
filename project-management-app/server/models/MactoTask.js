// MacroTask model
const mongoose = require('mongoose');

const macroTaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  phase: { type: mongoose.Schema.Types.ObjectId, ref: 'Phase' },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MacroTask', macroTaskSchema);
