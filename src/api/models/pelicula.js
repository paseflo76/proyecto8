const mongoose = require('mongoose')

const peliculaSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    img: { type: String, reqired: true },
    categories: [
      {
        type: String,
        enum: [
          'Accion',
          'Aventuras',
          'terror',
          'Drama',
          'Ciencia Ficcion',
          'Comedia',
          'Drama',
          'Fantasia',
          'Animacion',
          'Fantasia',
          'Thriller'
        ]
      }
    ]
  },
  {
    timestamps: true
  }
)

const Pelicula = mongoose.model('peliculas', peliculaSchema, 'peliculas')

module.exports = Pelicula
