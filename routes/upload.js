var express = require("express");
var router = express.Router();

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const uniqid = require("uniqid"); // pour générer un nom de fichier unique

// route POST upload d'une photo vers cloudinary
router.post("/", async (req, res) => {
    //creation chemin temp pour stocker la photo sur le serveur
    const photoPath = `./tmp/${uniqid()}.jpg`;
    //deplacement fichier photofromfront du frontend vers dossier tmp
    const resultMove = await req.files.photoFromFront.mv(photoPath);

    if (!resultMove) {
        const resultCloudinary = await cloudinary.uploader.upload(photoPath);
        //suppression fichier temporaire
        fs.unlinkSync(photoPath);

        if (resultCloudinary) {
            res.json({
                result: true,
                photo: {
                    url: resultCloudinary.secure_url,
                    date: resultCloudinary.created_at,
                },
            });
        } else {
            res.json({ result: false, error: "error" });
        }
    } else {
        res.json({ result: false, error: resultMove });
    }
});

module.exports = router;
