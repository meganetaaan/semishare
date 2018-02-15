import { Router } from 'express'

const router = Router()

const semiMap = new Map()

/* GET semis listing. */
router.get('/semis', function (req, res, next) {
  res.json(semiMap)
})

/* GET semi by ID. */
router.get('/semis/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < semiMap.length) {
    res.json(semiMap.get(id))
  } else {
    res.sendStatus(404)
  }
})

/* GET semi by ID. */
router.put('/semis/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  semiMap.set(id, req)
  res.sendStatus(200)
})

export default router
