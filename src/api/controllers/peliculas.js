const { deleteFile } = require('../../utils/deletefile')
const Pelicula = require('../models/pelicula')

const getPeliculas = async (req, res, next) => {
  try {
    const peliculas = await Pelicula.find()
    return res.status(200).json(peliculas)
  } catch (error) {
    return res.status(400).json('error en la solicitud')
  }
}

const postPelicula = async (req, res, next) => {
  try {
    const newPelicula = new Pelicula(req.body)
    if (req.file) {
      newPelicula.img = req.file.path
    }

    const peliculasaved = await newPelicula.save()
    return res.status(201).json(peliculasaved)
  } catch (error) {
    conslole.log(error)
    return res.status(400).json('error al publicar')
  }
}

const updatePelicula = async (req, res, next) => {
  try {
    const { id } = req.params

    const newPelicula = new Pelicula(req.body)

    newPelicula._id = id
    if (req.file) {
      newPelicula.img = req.file.path
      const oldpelicula = await Pelicula.findById(id)
      deleteFile(oldpelicula.img)
    }

    const peliculaUpdate = await Pelicula.findByIdAndUpdate(id, newPelicula, {
      new: true
    })
    return res.status(200).json(peliculaUpdate)
  } catch (error) {
    return res.status(400).json('error al modificar')
  }
}

const deletePelicula = async (req, res, next) => {
  try {
    const { id } = req.params
    const peliculaDeleted = await Pelicula.findByIdAndDelete(id)
    deleteFile(peliculaDeleted.img)
    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: peliculaDeleted
    })
  } catch (error) {
    return res.status(400).json('error al borrar')
  }
}

module.exports = {
  getPeliculas,
  postPelicula,
  updatePelicula,
  deletePelicula
}
