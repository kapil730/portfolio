const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: [true, 'Degree is required'],
      trim: true,
    },
    institution: {
      type: String,
      required: [true, 'Institution name is required'],
      trim: true,
    },
    university: {
      type: String,
      default: '',
    },
    startYear: {
      type: String,
      required: [true, 'Start year is required'],
    },
    endYear: {
      type: String,
      default: 'Present',
    },
    description: {
      type: String,
      default: '',
    },
    gpa: {
      type: String,
      default: '',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Education', educationSchema);
