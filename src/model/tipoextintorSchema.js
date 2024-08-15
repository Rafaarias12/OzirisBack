const mongoose = require('mongoose');

const tipoextintorSchema = new mongoose.Schema({
    iId_TipoExtintor:{
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true
    },
    vUnidad: {
        type: String,
        enum: ['Litro (lt)', 'Kilogramo (kg)'],
        required: true
    },
    vNombre: {
        type: String,
        unique: true,
        
    }

});

const tipoExtintor = mongose.model('tipo_extintor', tipoextintorSchema);