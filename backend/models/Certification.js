const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Certification title is required'],
      trim: true,
    },
    issuer: {
      type: String,
      required: [true, 'Issuer is required'],
      trim: true,
    },
    date: {
      type: String,
      default: '',
    },
    credentialUrl: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      enum: ['Certification', 'Course', 'Award', 'Achievement'],
      default: 'Certification',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Certification', certificationSchema);
