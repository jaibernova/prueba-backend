const mongoose = require('mongoose');

//URL A LA BASE DE DATOS

const URL = 'mongodb+srv://root:ferremax2021@ferremax.miudj.mongodb.net/Ferremax?retryWrites=true&w=majority';

//MENSAJE DE CONEXION EXITOSA
mongoose.connect(URL)
    .then(db => console.log('Base de datos conectada...'))

    .catch(err => console.error(err));

module.exports = mongoose;