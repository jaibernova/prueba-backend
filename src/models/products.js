const mongoose = require('mongoose');
const { Schema } = mongoose;

//ESQUEMA DE BASE DE DATOS PRODUCTOS
const ProductSchema = new Schema({
    code: { type: String, required: true, maxlength: [13], unique: [true, "Éste código ya se encuentra registrado"] },
    name: { type: String, required: false },
    marca: { type: String, required: false },
    category: { type: String, required: false },
    description: { type: String, required: false },
    stock: { type: Number, required: false },
    precio: { type: Number, required: false },
    status: { type: String, required: false },
});

//EXPORTACION DEL MODULO
module.exports = mongoose.model('products', ProductSchema);