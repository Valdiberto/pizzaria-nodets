import { Router } from 'express'
import * as pageController from '../controllers/pageController'

const router = Router()

router.get('/', pageController.home)



export default router