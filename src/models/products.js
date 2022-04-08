const mongoose = require('mongoose');
const { Schema } = mongoose;

//ESQUEMA DE BASE DE DATOS PRODUCTOS
const ProductSchema = new Schema({
    code: { type: String, required: true, maxlength: [13], unique: [true, "Éste código ya se encuentra registrado"] },
    name: { type: String, required: false, default: "default" },
    marca: { type: String, required: false, default: "default" },
    category: { type: String, required: false, default: "default" },
    description: { type: String, required: false, default: "default" },
    stock: { type: Number, required: false, default: "default" },
    precio: { type: Number, required: false, default: "default" },
    status: { type: String, required: false, default: "default" },
});

//EXPORTACION DEL MODULO
module.exports = mongoose.model('products', ProductSchema);