import {UserModel} from "./models/users.model.js"
import mongoose from "mongoose"

export default class UsersDAO {
    async getAll() {
        return await UserModel.find().lean()
    }

    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Formato de identificación de usuario NO válido")
        }
        const user = await UserModel.findById(id).lean()
        if (!user) {
        throw new Error("Usuario NO encontrado")
        }
        return user
    }

    async create(data) {
        return await UserModel.create(data)
    }

    async update(id, data) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Formato de identificación de usuario NO válido")
        }
        const user = await UserModel.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
        ).lean()
        if (!user) {
        throw new Error("Usuario NO encontrado")
        }
        return user
    }

    async delete(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Formato de identificación de usuario NO válido")
        }
        const user = await UserModel.findByIdAndDelete(id).lean()
        if (!user) {
        throw new Error("Usuario NO encontrado")
        }
        return user
    }

    async insertMany(users) {
        return await UserModel.insertMany(users)
    }

    async addPet(userId, petId) {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Formato de identificación de usuario NO válido")
        }
        if (!mongoose.Types.ObjectId.isValid(petId)) {
        throw new Error("Formato de identificación de mascota NO válido")
        }
        // Verificar si la mascota ya pertenece a otro usuario
        const alreadyAssigned = await UserModel.findOne({ pets: petId }).lean()
        if (alreadyAssigned && alreadyAssigned._id.toString() !== userId) {
            throw new Error("La mascota ya está asignada a otro usuario")
        }

        const user = await UserModel.findByIdAndUpdate(
            userId,
            { $addToSet: { pets: petId } }, // evita duplicados
            { new: true }
            ).lean()
        if (!user) {
            throw new Error("Usuario NO encontrado")
        }
        return user
    }
}

    