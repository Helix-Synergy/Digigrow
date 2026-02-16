const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/emailSender');
const { ownerTemplate, confirmationTemplate } = require('../utils/emailTemplates');
const { Contact } = require('../models/FormSchemas');

// Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts' });
    }
});

// Submit contact form
router.post('/', async (req, res) => {
    try {
        const formData = req.body;

        // Save to DB
        const contact = new Contact(formData);
        await contact.save();

        // Send Emails (Optional - uncomment to enable)
        /*
        await sendEmail(formData.email, 'Thank You!', confirmationTemplate(formData.name));
        await sendEmail(process.env.OWNER_EMAIL, 'New Contact Submission', ownerTemplate(formData));
        */

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
