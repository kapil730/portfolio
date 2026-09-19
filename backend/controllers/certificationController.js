const Certification = require('../models/Certification');

// @desc    Get all certifications
// @route   GET /api/certifications
// @access  Public
exports.getCertifications = async (req, res, next) => {
  try {
    const certifications = await Certification.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: certifications.length, data: certifications });
  } catch (error) {
    next(error);
  }
};

// @desc    Create certification
// @route   POST /api/certifications
// @access  Private (Admin)
exports.createCertification = async (req, res, next) => {
  try {
    const certification = await Certification.create(req.body);
    res.status(201).json({ success: true, data: certification });
  } catch (error) {
    next(error);
  }
};

// @desc    Update certification
// @route   PUT /api/certifications/:id
// @access  Private (Admin)
exports.updateCertification = async (req, res, next) => {
  try {
    const certification = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!certification) {
      return res.status(404).json({ success: false, message: 'Certification not found' });
    }
    res.status(200).json({ success: true, data: certification });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete certification
// @route   DELETE /api/certifications/:id
// @access  Private (Admin)
exports.deleteCertification = async (req, res, next) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) {
      return res.status(404).json({ success: false, message: 'Certification not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
