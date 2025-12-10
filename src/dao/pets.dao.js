import { PetModel } from "./models/pets.model.js"

export default class PetsDAO {
    insertMany(pets) {
        return PetModel.insertMany(pets)
    }
}
