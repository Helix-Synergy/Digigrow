const mongoose = require('mongoose');

// 1. Contact Form Schema
const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    subject: String,
    message: String,
    source: { type: String, default: 'Digigrow' },
    createdAt: { type: Date, default: Date.now }
});

// 2. Collaborate Form Schema
const CollaborateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    organization: String,
    type: String, // e.g., 'Event Partnership', 'Sponsorship'
    message: String,
    source: { type: String, default: 'Digigrow' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = {
    Contact: mongoose.model('Contact', ContactSchema),
    Collaborate: mongoose.model('Collaborate', CollaborateSchema)
};
