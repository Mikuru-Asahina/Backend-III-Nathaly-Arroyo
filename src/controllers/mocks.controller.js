import MockingService from "../services/mocking.service.js"

const mockingService = new MockingService()

export default class MocksController {

    static getMockPets(req, res) {
        const pets = mockingService.generateMockPets(100)
        res.send({ status: "success", payload: pets })
    }
    //... /api/mocks/mockingusers?amount=10
    static getMockUsers(req, res) {
        const amount = Number(req.query.amount) || 50
        const users = mockingService.generateMockUsers(amount)
        res.send({ status: "success", payload: users })
    }
    static async generateData(req, res) {
        try {
            const users = Number(req.body.users) || 0
            const pets = Number(req.body.pets) || 0

            const result = await mockingService.insertGeneratedData(users, pets)

            res.send({
                status: "success",
                message: "Datos generados e insertados correctamente",
                inserted: result
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({ status: "error", error })
        }
    }
}
