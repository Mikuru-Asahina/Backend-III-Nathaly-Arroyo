import { Router } from "express"
import MocksController from "../controllers/mocks.controller.js"

const router = Router()

router.get("/mockingpets", MocksController.getMockPets)
router.get("/mockingusers", MocksController.getMockUsers)
router.post("/generateData", MocksController.generateData)

export default router
