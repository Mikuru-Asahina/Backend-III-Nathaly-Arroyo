import {UserModel} from "./models/users.model.js"

export default class UsersDAO {
    async getAll() {
        return await UserModel.find().populate("pets").lean()
    }
    async getById(id) {
        return await UserModel.findById(id).populate("pets").lean()
    }
    async create(data) {
        return await UserModel.create(data)
    }
    async update(id, data) {
        return await UserModel.findByIdAndUpdate(id, data, { new: true }).lean()
    }
    async delete(id) {
        return await UserModel.findByIdAndDelete(id)
    }
    async insertMany(users) {
        return await UserModel.insertMany(users)
    }
}
