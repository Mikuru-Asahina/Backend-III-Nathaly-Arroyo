import { Router } from "express"
import UsersController from "../controllers/users.controller.js"

const router = Router()

router.get("/", UsersController.getAll)
router.get("/:uid", UsersController.getById)
router.post("/", UsersController.create)
router.put("/:uid", UsersController.update)
router.delete("/:uid", UsersController.delete)
router.post("/:uid/pets/:pid", UsersController.addPet)

export default router
