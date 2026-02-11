import UsersService from "../services/users.service.js";

export default class UsersController {

    static async getAll(req, res) {
        try {
        const users = await UsersService.getUsers();
        res.status(200).send({ status: "success", payload: users });
        } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
        }
    }

    static async getById(req, res) {
        try {
        const { uid } = req.params;
        const user = await UsersService.getUserById(uid);
        res.status(200).send({ status: "success", payload: user });
        } catch (error) {
        res.status(404).send({ status: "error", message: error.message });
        }
    }

    static async create(req, res) {
        try {
        const user = await UsersService.createUser(req.body);
        res.status(201).send({ status: "success", payload: user });
        } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
        }
    }

    static async update(req, res) {
        try {
        const { uid } = req.params;
        const result = await UsersService.updateUser(uid, req.body);
        res.status(200).send({ status: "success", payload: result });
        } catch (error) {
        res.status(400).send({ status: "error", message: error.message });
        }
    }

    static async delete(req, res) {
        try {
        const { uid } = req.params;
        const result = await UsersService.deleteUser(uid);
        res.status(200).send({ status: "success", payload: result });
        } catch (error) {
        res.status(404).send({ status: "error", message: error.message });
        }
    }

    static async addPet(req, res) {
        try {
        const { uid, pid } = req.params;
        const result = await UsersService.addPetToUser(uid, pid);
        res.status(200).send({ status: "success", payload: result });
        } catch (error) {
        res.status(400).send({ status: "error", message: error.message });
        }
    }
}


