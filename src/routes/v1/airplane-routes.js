const express = require('express');
const { AirplaneController } = require('../../controller');
const { AirplaneMiddleWares } = require('../../middlewares')
const router = express.Router();

router.post('/', 
                AirplaneMiddleWares.validateCreateRequest,
                AirplaneController.createAirplane);

module.exports = router;