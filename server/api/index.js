import { Router } from 'express'

import peer from './peer'
import users from './users'

const router = Router()

// Add USERS Routes
router.use(peer)

// Add peer Routes
router.use(users)

export default router
