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

async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error){
        throw new AppError("Could not fetch airplane data from database", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try{
        const airplanes = await airplaneRepository.get(id);
        return airplanes;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane requested is not present", error.statusCode);
        }
        throw new AppError("Could not fetch airplane from database", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id){
    try{
        const airplanes = await airplaneRepository.destroy(id);
        return airplanes;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane requested to delete is not present", error.statusCode);
        }
        throw new AppError("Could not fetch airplane from database", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data) {
    try {
      const response = await airplaneRepository.update(id, data);
      return response;
    } catch (error) {
      throw new AppError("Cant update", statusCode.BAD_REQUEST);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}