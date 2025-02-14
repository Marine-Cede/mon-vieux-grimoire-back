const sharp = require('sharp');
const fs = require("fs");
const path = require("path");

const sharper =  async(req, res, next) => {
    if(req.file){
        const filename = path.parse(req.file.filename).name + '.webp';
        const imagePath = path.join('images',filename);    
        await sharp(req.file.path)
        .resize(350, 600)
        .webp({quality: 50})
        .toFile(imagePath, (erreur) => {
            if (erreur){
                console.error("Erreur toFile", erreur)
                return res.status(500).json({message: "Erreur dans la conversion d'image en Webp"});
            }
            fs.unlink(req.file.path, (err) => {
                if(err){
                    console.log("Erreur lors de l'écrasement du fichier source", err)
                }
            });
            req.file.filename  = filename
            next();
        });
    } else {
        next();
    }
};

module.exports = sharper;