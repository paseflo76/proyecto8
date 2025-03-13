const cloudinary = require('cloudinary').v2
const deleteFile = (url) => {
  const imgSplited = url.split('/')
  const folderName = imgSplited.at(-2)
  const fileName = imgSplited.at(-1).split('.')[0]

  console.log(folderName)
  console.log(fileName)

  cloudinary.uploader.destroy(`${folderName}/${fileName}`, () => {
    console.log('eliminado')
  })
}

module.exports = { deleteFile }
