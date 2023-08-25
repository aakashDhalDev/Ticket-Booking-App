const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../respositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data){
    try{
        const airport = await airportRepository.create(data);
        return airport;
    }
    catch(error){
        if(error.name == "SequelizeValidationError"){
            let errorMessages = [];
            error.errors.forEach((err)=>{
                errorMessages.push(err.message);
            })
            throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Could not create an airport object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports(){
    try{
        const airports = await airportRepository.getAll();
        return airports;
    }
    catch(error){
        throw new AppError("Could not fetch airport data from database", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try{
        const airport = await airportRepository.get(id);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport requested is not present", error.statusCode);
        }
        throw new AppError("Could not fetch airport from database", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try{
        const airport = await airportRepository.destroy(id);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport requested to delete is not present", error.statusCode);
        }
        throw new AppError("Could not fetch airport from database", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data) {
    try {
      const response = await airportRepository.update(id, data);
      return response;
    } catch (error) {
      throw new AppError("Cant update", statusCode.BAD_REQUEST);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}