import {PetModel} from "./models/pets.model.js"

export default class PetsDAO {
    async getAll() {
        return await PetModel.find().lean()
    }
    async getById(id) {
        return await PetModel.findById(id).lean()
    }
    async create(data) {
        return await PetModel.create(data)
    }
    async update(id, data) {
        return await PetModel.findByIdAndUpdate(id, data, { new: true }).lean()
    }
    async delete(id) {
        return await PetModel.findByIdAndDelete(id)
    }
    async insertMany(pets) {
        return await PetModel.insertMany(pets)
    }
}
