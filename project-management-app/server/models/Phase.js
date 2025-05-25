// Phase model
const mongoose = require('mongoose');

const phaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  macroTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MacroTask' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Phase', phaseSchema);
