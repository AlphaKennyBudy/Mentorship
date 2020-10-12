const express = require('express');
const router = express.Router();
const Additional_info = require('../models/Additional_info');

// GET ALL
router.get('/', async (req, res) => {
  try {
    const additional_infos = await Additional_info.find();
    res.json(additional_infos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      z,
    });
  }
});

// GET ONE
router.get('/:id', getAdditional_info, (req, res) => {
  res.send(res.additional_info);
});

//POST ONE
router.post('/', async (req, res) => {
  const additional_info = new Additional_info({
    cv_id: req.body.cv_id,
    foreign_language: req.body.foreign_language,
    removal: req.body.removal,
    time_jobs: req.body.time_jobs,
    schedule: req.body.schedule,
    driver_license: req.body.driver_license,
    availability_of_car: req.body.availability_of_car,
  });

  try {
    const newAdditional_info = await additional_info.save();
    res.status(200).json(newAdditional_info);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

async function getAdditional_info(req, res, next) {
  let additional_info;
  try {
    additional_info = await Additional_info.findById(req.params.id);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }

  res.additional_info = additional_info;
  next();
}

module.exports = router;
