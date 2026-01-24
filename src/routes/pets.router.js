import { Router } from "express"
import PetsController from "../controllers/pets.controller.js"

const router = Router()

router.get("/", PetsController.getAll)
router.get("/:pid", PetsController.getById)
router.post("/", PetsController.create)
router.put("/:pid", PetsController.update)
router.delete("/:pid", PetsController.delete)

export default router
