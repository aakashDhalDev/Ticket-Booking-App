const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../respositories');
const AppError = require('../utils/errors/app-error');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try{
        const flight = await flightRepository.create(data);
        return flight;
    }
    catch(error){
        if(error.name == "SequelizeValidationError"){
            let errorMessages = [];
            error.errors.forEach((err)=>{
                errorMessages.push(err.message);
            })
            throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Could not create an flight object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight
}