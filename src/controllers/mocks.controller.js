import Mocking from "../utils/Mocking.js"
import MockingService from "../services/mocking.service.js"

export default class MocksController {
    static async mockingPets(req, res) {
        try {
            const pets = Mocking.generatePets(100);
            res.send({ status: "success", payload: pets })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async mockingUsers(req, res) {
        try {
            const amount = Number(req.query.amount) || 50
            const users = Mocking.generateUsers(amount)
            res.send({ status: "success", payload: users })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async generateData(req, res) {
        try {
            const users = Number(req.body.users) || 0
            const pets = Number(req.body.pets) || 0
            const result = await MockingService.insertGeneratedData(users, pets)
            res.send({
                status: "success",
                message: "Datos generados e insertados correctamente",
                inserted: result
            });
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
}

