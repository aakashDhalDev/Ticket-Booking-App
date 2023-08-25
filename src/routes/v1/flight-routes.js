const express = require('express');
const { FlightController } = require('../../controller');
const { FlightMiddleware } = require('../../middlewares');
const router = express.Router();

// /api/v1/flight POST
router.post('/', 
                FlightMiddleware.validateCreateRequest,
                FlightController.createFlight);

module.exports = router;