const { response } = require('express');
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function createAirport(req, res){
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
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

async function getAirports(req, res){
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK)
                    .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = {
            "reason": error.message,
            "status Code": error.statusCode
        };
        return res.status(error.statusCode)
                    .json(ErrorResponse);
    }
}

async function getAirport(req, res){
    try{
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK)
                    .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = {
            "reason": error.message,
            "status Code": error.statusCode
        };
        return res.status(error.statusCode)
                    .json(ErrorResponse);
    }
}

async function destroyAirport(req, res){
    try{
        const airport = await AirportService.destroy(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK)
                    .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = {
            "reason": error.message,
            "status Code": error.statusCode
        };
        return res.status(error.statusCode)
                    .json(ErrorResponse);
    }
}

async function updateAirport(req, res) {
    try {
      const response = await AirportService.updateAirport(
        req.params.id,
        req.body
      );
      SuccessResponse.data = response;
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.status).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}