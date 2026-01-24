import UsersService from "../services/users.service.js"

export default class UsersController {

    static async getAll(req, res) {
        try {
            const users = await UsersService.getUsers()
            res.send({ status: "success", payload: users })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async getById(req, res) {
        try {
            const user = await UsersService.getUserById(req.params.uid)
            res.send({ status: "success", payload: user })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async create(req, res) {
        try {
            const result = await UsersService.createUser(req.body)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async update(req, res) {
        try {
            const result = await UsersService.updateUser(req.params.uid, req.body)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async delete(req, res) {
        try {
            const result = await UsersService.deleteUser(req.params.uid)
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
        }
    }
    static async addPet(req, res) {
        try {
            const { uid, pid } = req.params
            const result = await UsersService.addPetToUser(uid, pid)
            res.send({
                status: "success",
                message: "Mascota asignada al usuario",
                payload: result
            })
        } catch (error) {
            res.status(500).send({ status: "error", message: error.message })
            }
    }
}

