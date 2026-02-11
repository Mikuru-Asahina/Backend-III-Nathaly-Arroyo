import UsersDAO from "../dao/users.dao.js"

const dao = new UsersDAO()

export default class UsersRepository {
    static async getUsers() {
        return await dao.getAll()
    }
    static async getUserById(id) {
        return await dao.getById(id)
    }
    static async createUser(data) {
        return await dao.create(data)
    }
    static async updateUser(id, data) {
        return await dao.update(id, data)
    }
    static async deleteUser(id) {
        return await dao.delete(id)
    }
    static async insertMany(users) {
        return await dao.insertMany(users)
    }
    static async addPetToUser(userId, petId) {
        return await dao.addPet(userId, petId);
    }
}

