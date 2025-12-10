import { Router } from "express"
import {UserModel} from "../dao/models/users.model.js"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find().populate("pets")
        res.send({ status: "success", payload: users })
    } catch (error) {
        res.status(500).send({ status: "error", error })
    }
})

export default router
