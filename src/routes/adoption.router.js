import { Router} from 'express'
import AdoptionsController from '../controllers/adoptions.controller.js'

const router = Router()

router.get('/',AdoptionsController.getAllAdoptions)
router.get('/:aid',AdoptionsController.getAdoption)
router.post('/:uid/:pid',AdoptionsController.createAdoption)

export default router
