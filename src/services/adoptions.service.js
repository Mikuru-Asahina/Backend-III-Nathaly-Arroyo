import AdoptionsRepository from "../repositories/adoptions.repository.js"
import AdoptionsDTO from "../dto/adoptions.dto.js"

export default class AdoptionsService {
    static async getAllAdoptions() {
        const adoptions = await AdoptionsRepository.getAll()
        return adoptions.map(a => new AdoptionsDTO(a))
    }
    static async getAdoption(id) {
        const adoption = await AdoptionsRepository.getById(id)
        if (!adoption) throw new Error("Adopción NO encontrada")
        return new AdoptionsDTO(adoption)
    }
    static async createAdoption(uid, pid, usersRepo, petsRepo) {
        const user = await usersRepo.getUserById(uid)
        if (!user) throw new Error("Usuario no encontrado")
        const pet = await petsRepo.getPetById(pid)
        if (!pet) throw new Error("Mascota no encontrada")
        if (pet.adopted) throw new Error("Mascota YA adoptada")
        //Actualizar mascota -marcar como adoptada en BD-
        await petsRepo.updatePet(pid, { adopted: true })
        //Actualizar usuario -asociar mascota al usuario-
        await usersRepo.addPetToUser(uid, pid)
        // Adoptar mascota
        const adoption = await AdoptionsRepository.create({user: uid,pet: pid})
        //Devolver DTO
        return new AdoptionsDTO(adoption)
    }
}

