const mongoose = require('mongoose')
const Pelicula = require('../../api/models/pelicula')
const peliculas1 = require('../../data/peliculas')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://paseflo34:sFByflpwmD5Z3rnH@cluster0.qtrlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Pelicula.collection.drop()
    console.log('peliculas eliminadas')

    await Pelicula.insertMany(peliculas1)
    console.log('peliculas introducidas')
  } catch (error) {
    console.log('error algo salio mal:', error)
  } finally {
    await mongoose.disconnect()
    console.log('desconectado de la BBDD')
  }
}
lanzarSemilla()
