import AdoptionsService from "../services/adoptions.service.js"
import UsersRepository from "../repositories/users.repository.js"
import PetsRepository from "../repositories/pets.repository.js"

export default class AdoptionsController {
    static async getAllAdoptions(req, res) {
        try {
            const result = await AdoptionsService.getAllAdoptions()
            res.status(200).send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", error: error.message })
        }
    }
    static async getAdoption(req, res) {
        try {
            const result = await AdoptionsService.getAdoption(req.params.aid)
            if (!result) {
                return res.status(404).send({status: "error",error: "Adopción NO encontrada"})
            }
            res.status(200).send({ status: "success", payload: result })
        } catch (error) {
            res.status(404).send({ status: "error", error: error.message })
        }
    }
    static async createAdoption(req, res) {
        try {
            const { uid, pid } = req.params
            const result = await AdoptionsService.createAdoption(
            uid,
            pid,
            UsersRepository,
            PetsRepository
            )
            return res.status(200).send({ status: "success", payload: result })
        } catch (error) {
            // errores de negocio
                if (
                    error.message.includes("NO encontrado") ||
                    error.message.includes("YA adoptado")
                ) {
                    return res.status(400).send({status: "error",error: error.message})
                }
                // error real
            return res.status(500).send({status: "error",error: "Internal server error"})
        }
    }
}


