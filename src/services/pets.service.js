import PetsDAO from "../dao/pets.dao.js"

export default class PetsService {
    constructor() {
        this.petsDAO = new PetsDAO()
    }

    insertMany(pets) {
        return this.petsDAO.insertMany(pets)
    }
}
