import { AdoptionModel } from "./models/adoptions.model.js"

export default class AdoptionsDAO {
    async getAll() {
        return await AdoptionModel.find().populate("user").populate("pet").lean()
    }
    async getById(id) {
        return await AdoptionModel.findById(id).populate("user").populate("pet").lean()
    }
    async create(data) {
        const doc = await AdoptionModel.create(data)
        return doc.toObject()
    }
}
