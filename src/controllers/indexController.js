let db = require('../database/models');

module.exports = {
    index: function (req,res) {
        db.pdfs.findAll()
        .then(function(pdf) {
            return res.render('index', {
                pdf: pdf
            })
        })
    }
}

