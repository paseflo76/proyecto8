const Cine = require('../models/cines')

const getCines = async (req, res, next) => {
  try {
    const cines = await Cine.find().populate('peliculas')
    return res.status(200).json(cines)
  } catch (error) {
    return res.status(400).json('error en la solicitud')
  }
}

const postCine = async (req, res, next) => {
  try {
    const newCine = new Cine(req.body)
    const cineSaved = await newCine.save()
    return res.status(201).json(cineSaved)
  } catch (error) {
    console.log(error)
    return res.staus(400).json('error al crear el cine')
  }
}

const updateCine = async (req, res, next) => {
  try {
    const { id } = req.params
    //? Obtener el cine actual
    const oldCine = await Cine.findById(id)
    if (!oldCine) {
      return res.status(404).json({ error: 'Cine no encontrado' })
    }
    //?Combinar las peliculas sin duplicados
    const mergedPeliculas = [
      ...new Set([...oldCine.peliculas, ...(req.body.peliculas || [])])
    ]
    //? Actualizar solo los campos proporcionados
    const cineUpdate = await Cine.findByIdAndUpdate(
      id,
      { ...req.body, peliculas: mergedPeliculas },
      { new: true, runValidators: true }
    )

    return res.status(200).json(cineUpdate)
  } catch (error) {
    return res.status(400).json({
      error: 'error al actualizar el cine',
      details: error.message
    })
  }
}

const cinedelete = async (req, res, next) => {
  try {
    const { id } = req.params
    const cinedeleted = await Cine.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: cinedeleted
    })
  } catch (error) {
    return res.status(400).json('error al eliminar el cine')
  }
}

module.exports = {
  getCines,
  postCine,
  updateCine,
  cinedelete
}
