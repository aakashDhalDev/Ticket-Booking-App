const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../respositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data){
    try{
        const city = await cityRepository.create(data);
        return city;
    }
    catch(error){
        if(error.name == "SequelizeValidationError"){
            let errorMessages = [];
            error.errors.forEach((err)=>{
                errorMessages.push(err.message);
            })
            throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Could not create an city object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try{
        const city = await cityRepository.destroy(id);
        return city;
    }
    catch(error){
        if(error.name == "SequelizeValidationError"){
            let errorMessages = [];
            error.errors.forEach((err)=>{
                errorMessages.push(err.message);
            })
            throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Could not create an city object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {
    try {
      const response = await cityRepository.update(id, data);
      return response;
    } catch (error) {
        throw new AppError("Cant update", statusCode.BAD_REQUEST);
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity
}
