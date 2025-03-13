const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')
const cloudinary = require('cloudinary').v2

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, _file) => {
    const folderName = req.body.folder || 'peliculas' // Permite cambiar la carpeta dinámicamente

    return {
      folder: folderName,
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    }
  }
})

const upload = multer({ storage })

module.exports = upload
