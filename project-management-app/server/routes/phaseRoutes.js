const express = require('express');
const router = express.Router();
const Phase = require('../models/Phase');

router.get('/:projectId', async (req, res) => {
  const phases = await Phase.find({ project: req.params.projectId }).sort('order');
  res.json(phases);
});

module.exports = router;