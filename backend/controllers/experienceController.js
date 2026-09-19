const Experience = require('../models/Experience');

// @desc    Get all experiences
// @route   GET /api/experience
// @access  Public
exports.getExperiences = async (req, res, next) => {
  try {
    const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: experiences.length, data: experiences });
  } catch (error) {
    next(error);
  }
};

// @desc    Create experience
// @route   POST /api/experience
// @access  Private (Admin)
exports.createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
};

// @desc    Update experience
// @route   PUT /api/experience/:id
// @access  Private (Admin)
exports.updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!experience) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }
    res.status(200).json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete experience
// @route   DELETE /api/experience/:id
// @access  Private (Admin)
exports.deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
