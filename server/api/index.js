import { Router } from 'express'
import users from './users'
import semis from './semis'

const router = Router()

// Add USERS Routes
router.use(users)

router.use(semis)

export default router
