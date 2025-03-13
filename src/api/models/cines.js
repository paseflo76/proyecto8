const mongoose = require('mongoose')

const CineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    direction: { type: String, required: true },
    peliculas: [
      { type: mongoose.Types.ObjectId, ref: 'peliculas', required: false }
    ]
  },
  {
    timestamps: true
  }
)

const Cine = mongoose.model('cines', CineSchema, 'cines')

module.exports = Cine
