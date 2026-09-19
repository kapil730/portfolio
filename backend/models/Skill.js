const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      enum: ['Programming', 'Web Development', 'Database', 'Cloud & DevOps', 'Data'],
    },
    level: {
      type: Number,
      required: true,
      min: [0, 'Level must be at least 0'],
      max: [100, 'Level cannot exceed 100'],
    },
    icon: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);
