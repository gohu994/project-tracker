const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { createProject, getProjectById } = require('../controllers/projectController');

router.get('/', async (req, res) => {
  const projects = await Project.find().populate('owner');
  res.json(projects);
});

router.post('/', createProject);
router.get('/:id', getProjectById);

module.exports = router;