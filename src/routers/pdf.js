const multer = require("multer")
const express = require('express');
const path = require('path');

const router = express.Router();
const pdfController = require('../controllers/pdfController');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/pdf'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.titulo + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get("/create",pdfController.create)
router.post('/create', upload.single('ruta_pdf'),pdfController.save);

router.get("/viewPdf/:id", pdfController.view)

module.exports = router