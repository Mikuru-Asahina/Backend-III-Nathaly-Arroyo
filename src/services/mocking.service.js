import Mocking from "../utils/Mocking.js"
import UsersService from "./users.service.js"
import PetsService from "./pets.service.js"

export default class MockingService {
    constructor() {
        this.usersService = new UsersService()
        this.petsService = new PetsService()
    }

    generateMockUsers(amount) {
        return Mocking.generateUsers(amount)
    }

    generateMockPets(amount) {
        return Mocking.generatePets(amount)
    }

    async insertGeneratedData(usersAmount, petsAmount) {
        const generatedUsers = Mocking.generateUsers(usersAmount)
        const generatedPets = Mocking.generatePets(petsAmount)

        const insertedUsers = await this.usersService.insertMany(generatedUsers)
        const insertedPets = await this.petsService.insertMany(generatedPets)

        return {
            users: insertedUsers.length,
            pets: insertedPets.length
        }
    }
}
