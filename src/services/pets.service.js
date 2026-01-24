import PetsRepository from "../repositories/pets.repository.js"
import PetsDTO from "../dto/pets.dto.js"

export default class PetsService {
    static async getPets() {
        const pets = await PetsRepository.getPets()
        return pets.map(p => new PetsDTO(p))
    }
    static async getPetById(id) {
        const pet = await PetsRepository.getPetById(id)
        return new PetsDTO(pet)
    }
    static async createPet(data) {
        return await PetsRepository.createPet(data)
    }
    static async updatePet(id, data) {
        return await PetsRepository.updatePet(id, data)
    }
    static async deletePet(id) {
        return await PetsRepository.deletePet(id)
    }
    static async insertMany(pets) {
        return await PetsRepository.insertMany(pets)
    }
}
