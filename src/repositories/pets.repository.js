import PetsDAO from "../dao/pets.dao.js"

const dao = new PetsDAO()

export default class PetsRepository {
    static async getPets() {
        return await dao.getAll()
    }
    static async getPetById(id) {
        return await dao.getById(id)
    }
    static async createPet(data) {
        return await dao.create(data)
    }
    static async updatePet(id, data) {
        return await dao.update(id, data)
    }
    static async deletePet(id) {
        return await dao.delete(id)
    }
    static async insertMany(pets) {
        return await dao.insertMany(pets)
    }
}
