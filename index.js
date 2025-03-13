require('dotenv').config()
const express = require('express')
const { connecDB } = require('./src/config/db')
const peliculasRouter = require('./src/api/routers/pelicula')
const cinesRouter = require('./src/api/routers/cines')
const userRoutes = require('./src/api/routers/user')
const cloudinary = require('cloudinary').v2

const app = express()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(express.json())

connecDB()

app.use('/api/v2/peliculas', peliculasRouter)
app.use('/api/v2/cines', cinesRouter)
app.use('/api/v2/users', userRoutes)

app.use('*', (req, res, next) => {
  return res.status(400).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000 🎆🎆😊')
})
