import UsersRepository from "../repositories/users.repository.js"
import UsersDTO from "../dto/users.dto.js"

export default class UsersService {
    static async getUsers() {
        const users = await UsersRepository.getUsers()
        return users.map(user => new UsersDTO(user))
    }
    static async getUserById(id) {
        const user = await UsersRepository.getUserById(id)
        return new UsersDTO(user);
    }
    static async createUser(data) {
        return await UsersRepository.createUser(data)
    }
    static async updateUser(id, data) {
        return await UsersRepository.updateUser(id, data)
    }
    static async deleteUser(id) {
        return await UsersRepository.deleteUser(id)
    }
    static async addPetToUser(userId, petId) {
        return await UsersRepository.addPetToUser(userId, petId)
    }
}

