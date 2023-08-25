const { response } = require('express');
const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function createFlight(req, res){
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });
        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED)
                    .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = {
            "reason": error.message,
            "status Code": error.statusCode
        };
        return res.status(error.statusCode)
                    .json(ErrorResponse);
    }
}

module.exports = {
    createFlight
}