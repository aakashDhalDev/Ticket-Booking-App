const { response } = require('express');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function createCity(req, res){
    try {
        const city = await CityService.createCity({
            name: req.body.city
        });
        SuccessResponse.data = city;
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

async function destroyCity(req, res){
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
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

async function updateCity(req, res) {
    try {
      const response = await CityService.updateCity(
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

module.exports={
    createCity,
    destroyCity,
    updateCity
}