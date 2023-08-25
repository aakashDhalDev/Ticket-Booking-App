const { StatusCodes } = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const {compareTime} = require('../utils/helpers/datetime-helpers');

function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Flight Number not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Airplane ID not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Departure Airport ID not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Arrival Airport ID not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Arrival Time not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Departure Time not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Price not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.boardingGate){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Boarding Gate not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Total Seats not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(compareTime(req.body.arrivalTime, req.body.departureTime)){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = {explanation: "Arrival time is earlier than the departure time in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}