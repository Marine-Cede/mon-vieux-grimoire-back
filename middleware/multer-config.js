const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("destination")
    callback(null, 'images');
    console.log("destination FAite")

  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    console.log("name",name)
    console.log("extension",extension);
    callback(null, name + Date.now() + '.' + extension);
    console.log("filename Fait")
  }
});

module.exports = multer({storage: storage}).single('image');