const {Logger} = require("../config")

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong insid ethe CRUD repo: CREATE");
            throw error;
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong insid ethe CRUD repo: DESTROY");
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong insid ethe CRUD repo: GET");
            throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong insid ethe CRUD repo: GET-ALL");
            throw error;
        }
    }

    async update(data){
        try {
            const response = await this.model.update({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong insid ethe CRUD repo: UPDATE");
            throw error;
        }
    }

}

module.exports = CrudRepository;