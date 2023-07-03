const { response } = require('express');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function createAirplane(req, res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED)
                    .json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.error = error;
        ErrorResponse.error = {
            "Reason": error.message,
            "Status Code": error.statusCode
        };
        return res.status(error.statusCode)
                    .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane
}