const express = require('express');
const router = express.Router();
const MactoTask = require('../models/MactoTask');

router.get('/:projectId', async (req, res) => {
  const tasks = await MactoTask.find({ project: req.params.projectId }).populate('assignedTo');
  res.json(tasks);
});

module.exports = router;