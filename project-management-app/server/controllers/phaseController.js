const Phase = require('../models/Phase');

// Create a new phase
exports.createPhase = async (req, res) => {
  try {
    const phase = await Phase.create(req.body);
    res.status(201).json(phase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all phases
exports.getPhases = async (req, res) => {
  try {
    const phases = await Phase.find().populate('mactoTasks');
    res.json(phases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get phase by ID
exports.getPhaseById = async (req, res) => {
  try {
    const phase = await Phase.findById(req.params.id).populate('mactoTasks');
    if (!phase) return res.status(404).json({ error: 'Phase not found' });
    res.json(phase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
