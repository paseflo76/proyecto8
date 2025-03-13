const jwt = require('jsonwebtoken')
//! esta funcion me sirve para generar la LLAVE (TOKEN)
const generateSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1y' })
}
//?esta funcion me sirve para comprobar si la llave la hemos hecho nosotros
const verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { generateSign, verifyJwt }
