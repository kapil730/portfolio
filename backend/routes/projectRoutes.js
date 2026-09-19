const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const protect = require('../middleware/auth');
const { validateProject } = require('../middleware/validate');

// Public routes
router.get('/', getProjects);
router.get('/:id', getProject);

// Admin-only routes
router.post('/', protect, validateProject, createProject);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
