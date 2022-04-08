const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    identificacion: { type: String, required: [true, 'Numero de Identificacion Requerido'], unique: true },
    name: { type: String, required: [true, 'Nombre obligatorio'] },
    lastname: { type: String, required: [true, 'Apellido obligatorio'] },
    telephone: String,
    email: {
        type: String,
        unique: [true, "Éste email ya se encuentra registrado."],
    },
    status: { type: String, default: "Activo" },
    typeusername: { type: String, default: "Vendedor" },
    password: String
})

module.exports = mongoose.model('users', UserSchema)