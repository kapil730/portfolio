const Education = require('../models/Education');

// @desc    Get all education entries
// @route   GET /api/education
// @access  Public
exports.getEducation = async (req, res, next) => {
  try {
    const education = await Education.find().sort({ order: 1, startYear: -1 });
    res.status(200).json({ success: true, count: education.length, data: education });
  } catch (error) {
    next(error);
  }
};

// @desc    Create education entry
// @route   POST /api/education
// @access  Private (Admin)
exports.createEducation = async (req, res, next) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json({ success: true, data: education });
  } catch (error) {
    next(error);
  }
};

// @desc    Update education entry
// @route   PUT /api/education/:id
// @access  Private (Admin)
exports.updateEducation = async (req, res, next) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!education) {
      return res.status(404).json({ success: false, message: 'Education entry not found' });
    }
    res.status(200).json({ success: true, data: education });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete education entry
// @route   DELETE /api/education/:id
// @access  Private (Admin)
exports.deleteEducation = async (req, res, next) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ success: false, message: 'Education entry not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
