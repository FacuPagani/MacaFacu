const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');


router.get("/", calendarController.calendar)

module.exports = router