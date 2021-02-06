module.exports = function(sequelize, dataTypes) {
    let alias = "pdfs";
    let cols = {
        id_pdf: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING,
            notNull: true
        },
        materia: {
            type: dataTypes.STRING,
            notNull: false
        },
        ruta_pdf: {
            type: dataTypes.STRING,
            notNull: false
        }
        
    };
    let config = {
        tableName: 'pdf',
        timestamps: false,
        
    }

    const PDFS = sequelize.define(alias, cols, config);

    

    return PDFS
}