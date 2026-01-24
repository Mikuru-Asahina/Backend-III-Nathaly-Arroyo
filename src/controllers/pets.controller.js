import PetsService from "../services/pets.service.js"

export default class PetsController {

    static async getAll(req, res) {
        try {
            const pets = await PetsService.getPets();
            res.send({ status: "success", payload: pets });
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message });
        }
    }
    static async getById(req, res) {
        try {
            const pet = await PetsService.getPetById(req.params.pid);
            res.send({ status: "success", payload: pet });
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message });
        }
    }
    static async create(req, res) {
        try {
            const result = await PetsService.createPet(req.body)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async update(req, res) {
        try {
            const result = await PetsService.updatePet(req.params.pid, req.body)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async delete(req, res) {
        try {
            const result = await PetsService.deletePet(req.params.pid)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
}
