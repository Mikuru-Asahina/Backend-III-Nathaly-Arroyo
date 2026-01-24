import AdoptionsService from "../services/adoptions.service.js"
import UsersRepository from "../repositories/users.repository.js"
import PetsRepository from "../repositories/pets.repository.js"

export default class AdoptionsController {
    static async getAllAdoptions(req, res) {
        try {
            const result = await AdoptionsService.getAllAdoptions()
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", error: error.message })
        }
    }
    static async getAdoption(req, res) {
        try {
            const result = await AdoptionsService.getAdoption(req.params.aid)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", error: error.message })
        }
    }
    static async createAdoption(req, res) {
        try {
            const { uid, pid } = req.params
            const result = await AdoptionsService.createAdoption(uid, pid, UsersRepository, PetsRepository)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", error: error.message })
        }
    }
}

