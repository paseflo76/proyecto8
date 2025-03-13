const { isAdmin, isAuth } = require('../../middleware/auth')
const upload = require('../../middleware/file')
const {
  getPeliculas,
  postPelicula,
  updatePelicula,
  deletePelicula
} = require('../controllers/peliculas')

const peliculasRouter = require('express').Router()

peliculasRouter.get('/', getPeliculas)
peliculasRouter.post('/', [isAuth], upload.single('img'), postPelicula)
peliculasRouter.put('/:id', [isAdmin], upload.single('img'), updatePelicula)
peliculasRouter.delete('/:id', [isAdmin], deletePelicula)

module.exports = peliculasRouter
