const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Create a new property
router.post('/', async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get properties with optional filters
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find(req.query);
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
