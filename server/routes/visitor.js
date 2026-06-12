const express = require('express');
const router = express.Router();
const { VisitorCount } = require('../models/FormSchemas');

// Get and increment visitor count
router.get('/', async (req, res) => {
    try {
        let visitor = await VisitorCount.findOne();
        if (!visitor) {
            visitor = new VisitorCount({ count: 1000 });
        }
        
        // If query param 'increment' is true, increment the count
        if (req.query.increment === 'true') {
            visitor.count += 1;
            await visitor.save();
        }
        
        res.status(200).json({ count: visitor.count });
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        res.status(500).json({ error: 'Failed to fetch visitor count' });
    }
});

module.exports = router;
