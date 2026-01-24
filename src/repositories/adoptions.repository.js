import AdoptionsDAO from "../dao/adoptions.dao.js";

const dao = new AdoptionsDAO();

export default class AdoptionsRepository {

    static async getAll() {
        return await dao.getAll();
    }

    static async getById(id) {
        return await dao.getById(id);
    }

    static async create(data) {
        return await dao.create(data);
    }
}
