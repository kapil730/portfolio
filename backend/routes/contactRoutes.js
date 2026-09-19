const express = require('express');
const router = express.Router();
const { submitContact, getMessages, markAsRead, deleteMessage } = require('../controllers/contactController');
const protect = require('../middleware/auth');
const { validateContact } = require('../middleware/validate');

// Public: submit contact form
router.post('/', validateContact, submitContact);

// Admin-only: view / manage messages
router.get('/', protect, getMessages);
router.put('/:id/read', protect, markAsRead);
router.delete('/:id', protect, deleteMessage);

module.exports = router;
