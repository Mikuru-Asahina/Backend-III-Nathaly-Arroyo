import UsersRepository from "../repositories/users.repository.js"
import UsersDTO from "../dto/users.dto.js"

export default class UsersService {

    static async getUsers() {
        const users = await UsersRepository.getUsers()
        return users.map(u => new UsersDTO(u))
    }

    static async getUserById(id) {
        const user = await UsersRepository.getUserById(id)
        if (!user) throw new Error("Usuario no encontrado")
        return new UsersDTO(user)
    }

    static async createUser(data) {
        const created = await UsersRepository.createUser(data)
        return new UsersDTO(created)
    }

    static async updateUser(id, data) {
        const updated = await UsersRepository.updateUser(id, data)
        if (!updated) throw new Error("Usuario no encontrado")
        return new UsersDTO(updated)
    }

    static async deleteUser(id) {
        const deleted = await UsersRepository.deleteUser(id)
        if (!deleted) throw new Error("Usuario no encontrado")
        return new UsersDTO(deleted)
    }

    static async addPetToUser(userId, petId) {
        const user = await UsersRepository.addPetToUser(userId, petId)
        if (!user) throw new Error("No se pudo asignar la mascota")
        return new UsersDTO(user)
    }
}

