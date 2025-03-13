const { isAdmin } = require('../../middleware/auth')
const {
  getCines,
  postCine,
  updateCine,
  cinedelete
} = require('../controllers/cines')

const cinesRouter = require('express').Router()

cinesRouter.get('/', getCines)
cinesRouter.post('/', [isAdmin], postCine)
cinesRouter.put('/:id', [isAdmin], updateCine)
cinesRouter.delete('/:id', [isAdmin], cinedelete)

module.exports = cinesRouter
