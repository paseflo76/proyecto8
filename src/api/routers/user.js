const { isAdmin, isAuth } = require('../../middleware/auth')
const {
  getUsers,
  register,
  login,
  updateUser,
  deleteUser
} = require('../controllers/user')

const userRoutes = require('express').Router()

userRoutes.get('/', [isAdmin], getUsers)
userRoutes.post('/Register', register)
userRoutes.post('/Login', login)
userRoutes.put('/:id', [isAdmin], updateUser)
userRoutes.delete('/:id', [isAuth], deleteUser)

module.exports = userRoutes
