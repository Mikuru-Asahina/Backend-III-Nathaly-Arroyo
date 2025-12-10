import { Router } from "express";
import {PetModel} from "../dao/models/pets.model.js"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const pets = await PetModel.find()
        res.send({ status: "success", payload: pets })
    } catch (error) {
        res.status(500).send({ status: "error", error })
    }
})

export default router
