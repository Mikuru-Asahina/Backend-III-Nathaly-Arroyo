import AdoptionsRepository from "../repositories/adoptions.repository.js"
import AdoptionsDTO from "../dto/adoptions.dto.js"

export default class AdoptionsService {
    static async getAllAdoptions() {
        const adoptions = await AdoptionsRepository.getAll()
        return adoptions.map(a => new AdoptionsDTO(a))
    }
    static async getAdoption(id) {
        const adoption = await AdoptionsRepository.getById(id)
        return new AdoptionsDTO(adoption)
    }
    static async createAdoption(uid, pid, usersRepo, petsRepo) {
        const user = await usersRepo.getUserById(uid)
        if (!user) throw new Error("User not found")
        const pet = await petsRepo.getPetById(pid)
        if (!pet) throw new Error("Pet not found")

        if (pet.adopted) throw new Error("Pet already adopted")
        await petsRepo.updatePet(pid, { adopted: true })
        await usersRepo.addPetToUser(uid, pid)
        
        const adoption = await AdoptionsRepository.create({ user: uid, pet: pid })
        return new AdoptionsDTO(adoption)
    }
}

