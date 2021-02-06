let db = require('../database/models');
const pdf = require('../database/models/pdf');
module.exports = {


    create: function (req,res) {
        return res.render("create")

    },
    save: function (req,res){
        db.pdfs.create({
            titulo:req.body.titulo,
            ruta_pdf: req.file.filename,
            materia:req.body.materia
    }).then(function(home) {
        res.redirect('/')
})
},
view: function(req, res) {
    db.pdfs.findByPk(req.params.id)
    .then(function(documento) {
        res.render('viewPdf', {
            documento: documento
        })
    })
},
all:function(req,res){
db.pdfs.findAll(pdf).then(function(pdfEntero){
    res.render("viewPdf",{
        pdfEntero : pdfEntero
    })
})
}
}