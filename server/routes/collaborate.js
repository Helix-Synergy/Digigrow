const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/emailSender');
const { ownerTemplate, confirmationTemplate } = require('../utils/emailTemplates');
const { Collaborate } = require('../models/FormSchemas');

// Get all collaborations
router.get('/', async (req, res) => {
    try {
        const items = await Collaborate.find().sort({ createdAt: -1 });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching collaborations' });
    }
});

// Submit collaboration form
router.post('/', async (req, res) => {
    try {
        const formData = req.body;

        // Save to DB
        const item = new Collaborate(formData);
        await item.save();

        res.status(200).json({ success: true, message: 'Proposal sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
