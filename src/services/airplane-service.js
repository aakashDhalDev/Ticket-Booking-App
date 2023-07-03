const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../respositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name == "SequelizeValidationError"){
            let errorMessages = [];
            error.errors.forEach((err)=>{
                errorMessages.push(err.message);
            })
            throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Could not create an airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane
}