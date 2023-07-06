const { StatusCodes } = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error = {explanation: "Model number not found in the incomming request"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    next();
}

function validateGetRequestByID(req, res, next){
    if(isNaN(req.params.id)){
        ErrorResponse.message = "Something went wrong while getting airplane data";
        ErrorResponse.error = {explanation: "ID entered is not a number"};
        return res.status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest,
    validateGetRequestByID
}