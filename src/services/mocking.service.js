import Mocking from "../utils/Mocking.js"
import UsersRepository from "../repositories/users.repository.js"
import PetsRepository from "../repositories/pets.repository.js"

export default class MockingService {

    static async insertGeneratedData(usersCount, petsCount) {
        const usersToInsert = Mocking.generateUsers(usersCount)
        const petsToInsert = Mocking.generatePets(petsCount)
        const insertedUsers =
            usersCount > 0 ? await UsersRepository.insertMany(usersToInsert) : []
        const insertedPets =
            petsCount > 0 ? await PetsRepository.insertMany(petsToInsert) : []
        
        return {
            users: insertedUsers.length,
            pets: insertedPets.length
        }
    }
}

